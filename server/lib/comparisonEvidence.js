import { readFileSync } from "node:fs";

const databaseUrl = new URL("../data/whap_comparisons_database.json", import.meta.url);
const database = JSON.parse(readFileSync(databaseUrl, "utf8"));

const entityById = new Map(database.entities.map((entity) => [entity.id, entity]));

const DISPLAY_NAME_BY_ENTITY = new Map([
  ["aztec-empire", "Aztecs"],
  ["british-empire", "British Territory"],
  ["communist-china-prc", "China"],
  ["dutch-empire", "Dutch Territory"],
  ["dutch-republic-netherlands", "Netherlands 1450-1800"],
  ["french-empire", "French Territory"],
  ["great-zimbabwe", "Zimbabwe Kingdom"],
  ["haiti", "Saint Domingue/Haiti"],
  ["ilkhanate", "Il-Khanate"],
  ["inca-empire", "Incas"],
  ["israel", "Palestine/Israel"],
  ["maya-civilization", "Mayans"],
  ["mississippian-cultures", "Mississippi Mound Builders"],
  ["portuguese-empire", "Portuguese Territory"],
  ["soviet-union", "USSR"],
  ["spanish-empire", "Spanish Territory"],
]);

const COURSE_PERIODS = [
  [1200, 1450],
  [1450, 1750],
  [1750, 1900],
  [1900, 2025],
];

const DISPLAY_NAME_OVERRIDES = new Map([
  ["british territory", "british-empire"],
  ["china", "communist-china-prc"],
  ["dutch territory", "dutch-empire"],
  ["french territory", "french-empire"],
  ["palestine israel", "israel"],
  ["portuguese territory", "portuguese-empire"],
  ["saint domingue haiti", "haiti"],
  ["spanish territory", "spanish-empire"],
  ["zimbabwe kingdom", "great-zimbabwe"],
]);

function normalize(value) {
  return String(value ?? "")
    .replace(/\b\d{4}\s*[-–]\s*(?:\d{4}|present)\b/gi, "")
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .toLowerCase();
}

const entityIdsByName = new Map();

for (const entity of database.entities) {
  for (const label of [entity.name, ...entity.aliases]) {
    const key = normalize(label);
    const ids = entityIdsByName.get(key) ?? [];
    if (!ids.includes(entity.id)) ids.push(entity.id);
    entityIdsByName.set(key, ids);
  }
}

function entityCandidates(displayName) {
  const key = normalize(displayName);
  const override = DISPLAY_NAME_OVERRIDES.get(key);
  return override ? [override] : entityIdsByName.get(key) ?? [];
}

function normalizePeriod(period) {
  if (Array.isArray(period) && period.length === 2) {
    return Number(period[0]) >= 1900
      ? "1900-present"
      : `${Number(period[0])}-${Number(period[1])}`;
  }

  return String(period ?? "").trim().toLowerCase().replace("2025", "present");
}

function periodBounds(period) {
  const match = String(period).match(/^(\d{4})-(\d{4}|present)$/);
  if (!match) return undefined;
  return [Number(match[1]), match[2] === "present" ? Infinity : Number(match[2])];
}

function periodContains(candidate, requested) {
  const candidateBounds = periodBounds(candidate);
  const requestedBounds = periodBounds(requested);
  return Boolean(
    candidateBounds &&
      requestedBounds &&
      candidateBounds[0] <= requestedBounds[0] &&
      candidateBounds[1] >= requestedBounds[1]
  );
}

function coursePeriodFor(sourcePeriod) {
  const bounds = periodBounds(sourcePeriod);
  if (!bounds) return undefined;
  return COURSE_PERIODS.find(
    ([start, end]) => bounds[0] >= start && bounds[0] < end
  );
}

function quizDisplayName(entityId, [start]) {
  if (entityId === "england-britain") {
    return `England ${start}-${start >= 1900 ? "Present" : start === 1200 ? 1450 : start === 1450 ? 1750 : 1900}`;
  }
  if (entityId === "france") {
    return `France ${start}-${start >= 1900 ? "Present" : start === 1200 ? 1450 : start === 1450 ? 1750 : 1900}`;
  }
  if (entityId === "japan") {
    if (start < 1750) return "Japan 1200-1853";
    return start < 1900 ? "Japan 1853-1900" : "Japan 1900-Present";
  }
  if (entityId === "united-states") {
    return start < 1900 ? "United States 1776-1900" : "United States 1900-Present";
  }
  if (entityId === "spain") return "Spain 1492-1750";
  if (entityId === "portugal") return "Portugal 1450-1750";
  if (entityId === "germany") return "Germany 1850-1920";
  return DISPLAY_NAME_BY_ENTITY.get(entityId) ?? entityById.get(entityId)?.name;
}

export function getQuizComparisons() {
  const quizzes = [];
  const seen = new Set();

  for (const comparison of database.comparisons) {
    for (const sourcePeriod of comparison.periods) {
      const timePeriod = coursePeriodFor(sourcePeriod);
      if (!timePeriod) continue;

      const [leftId, rightId] = comparison.entity_ids;
      const id = `${comparison.id}--quiz-${timePeriod[0]}-${timePeriod[1]}`;
      if (seen.has(id)) continue;
      seen.add(id);

      quizzes.push({
        id,
        timePeriod,
        country1: quizDisplayName(leftId, timePeriod),
        country2: quizDisplayName(rightId, timePeriod),
      });
    }
  }

  return quizzes;
}

export function findComparisonEvidence(countryA, countryB, period) {
  const leftIds = entityCandidates(countryA);
  const rightIds = entityCandidates(countryB);
  const requestedPeriod = normalizePeriod(period);

  const pairMatches = database.comparisons.filter(
    (comparison) =>
      leftIds.some((id) => comparison.entity_ids.includes(id)) &&
      rightIds.some((id) => comparison.entity_ids.includes(id))
  );

  const comparison =
    pairMatches.find((item) => item.periods.includes(requestedPeriod)) ??
    pairMatches.find((item) =>
      item.periods.some((candidate) => periodContains(candidate, requestedPeriod))
    ) ??
    (pairMatches.length === 1 ? pairMatches[0] : undefined);

  if (!comparison) return undefined;

  return {
    comparisonId: comparison.id,
    displayName: comparison.display_name,
    requestedPeriod,
    source: comparison.source,
    similarities: comparison.similarities.map(({ id, claim, themes }) => ({
      id,
      claim,
      themes,
    })),
    differences: comparison.differences.map(({ id, claim, themes }) => ({
      id,
      claim,
      themes,
    })),
  };
}

export function formatEvidenceForPrompt(evidence) {
  if (!evidence) {
    return "No pair-specific reference entry was found. Grade cautiously using established AP World History knowledge.";
  }

  const formatClaim = (entry) => `- [${entry.id}] ${entry.claim}`;
  return [
    `Reference comparison: ${evidence.displayName}`,
    `Reference period: ${evidence.requestedPeriod}`,
    "Accepted similarities:",
    ...evidence.similarities.map(formatClaim),
    "Accepted differences:",
    ...evidence.differences.map(formatClaim),
  ].join("\n");
}
