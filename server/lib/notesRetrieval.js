import { readFileSync } from "node:fs";
import { normalizeEntity, normalizeLabel } from "./entityNames.js";

const notesUrl = new URL("../../data/whap-notes.json", import.meta.url);

function normalizePeriod(period) {
  if (Array.isArray(period) && period.length === 2) {
    return `${Number(period[0])}-${Number(period[1]) >= 2025 ? "present" : Number(period[1])}`;
  }
  return String(period ?? "").trim().toLowerCase().replace("2025", "present");
}

export function createNotesLookup(rawNotes) {
  const byLabel = new Map();
  const byEntity = new Map();
  const byEntityPeriod = new Map();

  if (!rawNotes || typeof rawNotes !== "object" || Array.isArray(rawNotes)) {
    return () => undefined;
  }

  for (const [entity, entry] of Object.entries(rawNotes)) {
    if (
      !entry ||
      typeof entry !== "object" ||
      !Array.isArray(entry.periods) ||
      !entry.periods.every((value) => typeof value === "string") ||
      !Array.isArray(entry.notes) ||
      !entry.notes.every((value) => typeof value === "string")
    ) {
      continue;
    }

    const stored = { entity, periods: entry.periods, notes: entry.notes };
    byLabel.set(normalizeLabel(entity), stored);

    const canonicalName = normalizeEntity(entity);
    const candidates = byEntity.get(canonicalName) ?? [];
    candidates.push(stored);
    byEntity.set(canonicalName, candidates);
    for (const period of entry.periods) {
      byEntityPeriod.set(`${canonicalName}|${period}`, stored);
    }
  }

  const uniqueByEntity = new Map(
    [...byEntity].flatMap(([entity, entries]) =>
      entries.length === 1 ? [[entity, entries[0]]] : []
    )
  );

  return (entityName, period) => {
    try {
      const directMatch = byLabel.get(normalizeLabel(entityName));
      const requestedPeriod = normalizePeriod(period);
      const canonicalName = normalizeEntity(entityName);
      const match =
        directMatch ??
        byEntityPeriod.get(`${canonicalName}|${requestedPeriod}`) ??
        uniqueByEntity.get(canonicalName);

      return match
        ? {
            entity: match.entity,
            periods: [...match.periods],
            notes: [...match.notes],
          }
        : undefined;
    } catch {
      return undefined;
    }
  };
}

let rawNotes;
try {
  rawNotes = JSON.parse(readFileSync(notesUrl, "utf8"));
} catch (error) {
  console.error("WHAP notes could not be loaded; grading will use comparison evidence only", error);
  rawNotes = {};
}

export const getNotes = createNotesLookup(rawNotes);

export function formatNotesForPrompt(label, requestedEntity, entry) {
  if (!entry) return `${label} (${requestedEntity}): No notes available.`;

  const periods = entry.periods.length > 0 ? entry.periods.join(", ") : "not specified";
  return [
    `${label} (${entry.entity})`,
    `Periods: ${periods}`,
    ...entry.notes.map((note) => `- ${note}`),
  ].join("\n");
}
