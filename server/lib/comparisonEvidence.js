import { readFileSync } from "node:fs";

const databaseUrl = new URL("../../data/whap-comparisons.json", import.meta.url);
const database = JSON.parse(readFileSync(databaseUrl, "utf8"));

const ENTITY_ALIASES = new Map([
  ["aztec empire", "aztecs"],
  ["britain", "england"],
  ["british empire", "british territory"],
  ["communist china", "china"],
  ["dutch empire", "dutch territory"],
  ["dutch republic", "netherlands"],
  ["dutch republic netherlands", "netherlands"],
  ["england britain", "england"],
  ["ethiopian empire", "ethiopia"],
  ["french empire", "french territory"],
  ["great britain", "england"],
  ["great zimbabwe", "zimbabwe kingdom"],
  ["haiti", "haiti"],
  ["il khanate", "ilkhanate"],
  ["inca empire", "incas"],
  ["israel", "israel"],
  ["maya civilization", "mayans"],
  ["mississippian cultures", "mississippi mound builders"],
  ["palestine israel", "israel"],
  ["people s republic of china", "china"],
  ["portuguese empire", "portuguese territory"],
  ["prc", "china"],
  ["saint domingue", "haiti"],
  ["saint domingue haiti", "haiti"],
  ["soviet union", "ussr"],
  ["spanish empire", "spanish territory"],
  ["u s", "united states"],
  ["u s a", "united states"],
  ["united kingdom", "england"],
  ["united states of america", "united states"],
  ["usa", "united states"],
]);

function normalizeEntity(value) {
  const normalized = String(value ?? "")
    .replace(/\b\d{4}\s*[-–]\s*(?:\d{4}|present)\b/gi, "")
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .toLowerCase();
  return ENTITY_ALIASES.get(normalized) ?? normalized;
}

function normalizePeriod(period) {
  if (Array.isArray(period) && period.length === 2) {
    return `${Number(period[0])}-${Number(period[1]) >= 2025 ? "present" : Number(period[1])}`;
  }
  return String(period ?? "").trim().toLowerCase().replace("2025", "present");
}

function findStoredComparison(entityA, entityB, period) {
  const requestedA = normalizeEntity(entityA);
  const requestedB = normalizeEntity(entityB);
  const requestedPeriod = normalizePeriod(period);

  const matches = Object.entries(database).filter(([, entry]) => {
    const [storedA, storedB] = entry.entities.map(normalizeEntity);
    return (
      (storedA === requestedA && storedB === requestedB) ||
      (storedA === requestedB && storedB === requestedA)
    );
  });

  const match =
    matches.find(([, entry]) => entry.period === requestedPeriod) ??
    (matches.length === 1 ? matches[0] : undefined);
  if (!match) return undefined;

  const [key, entry] = match;
  const reversed = normalizeEntity(entry.entities[0]) === requestedB;
  return { key, entry, reversed, requestedPeriod };
}

export function getComparison(entityA, entityB, period) {
  const match = findStoredComparison(entityA, entityB, period);
  if (!match) return undefined;

  const { entry, reversed } = match;
  return {
    entities: reversed ? [entry.entities[1], entry.entities[0]] : [...entry.entities],
    period: entry.period,
    similarities: entry.similarities.map((similarity) => ({ ...similarity })),
    differences: entry.differences.map((difference) =>
      reversed
        ? { ...difference, entityA: difference.entityB, entityB: difference.entityA }
        : { ...difference }
    ),
  };
}

export function getQuizComparisons() {
  return Object.entries(database).map(([id, entry]) => {
    const [start, end] = entry.period.split("-");
    return {
      id,
      timePeriod: [Number(start), end === "present" ? 2025 : Number(end)],
      country1: entry.entities[0],
      country2: entry.entities[1],
    };
  });
}

export function findComparisonEvidence(countryA, countryB, period) {
  const stored = findStoredComparison(countryA, countryB, period);
  if (!stored) return undefined;

  const comparison = getComparison(countryA, countryB, period);
  return {
    comparisonId: stored.key,
    displayName: comparison.entities.join(" / "),
    requestedPeriod: stored.requestedPeriod,
    similarities: comparison.similarities.map((entry, index) => ({
      ...entry,
      id: `${stored.key}:similarity:${index + 1}`,
    })),
    differences: comparison.differences.map((entry, index) => ({
      ...entry,
      id: `${stored.key}:difference:${index + 1}`,
    })),
  };
}

export function formatEvidenceForPrompt(evidence) {
  if (!evidence) {
    return "No pair-specific reference entry was found. Grade cautiously using established AP World History knowledge.";
  }

  return [
    `Reference comparison: ${evidence.displayName}`,
    `Reference period: ${evidence.requestedPeriod}`,
    "Accepted similarities:",
    ...evidence.similarities.map(
      (entry) => `- [${entry.id}] ${entry.claim} (importance: ${entry.importance})`
    ),
    "Accepted differences:",
    ...evidence.differences.map(
      (entry) =>
        `- [${entry.id}] Society A: ${entry.entityA} Society B: ${entry.entityB} (importance: ${entry.importance})`
    ),
  ].join("\n");
}
