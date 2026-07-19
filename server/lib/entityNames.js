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

export function normalizeLabel(value) {
  return String(value ?? "")
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .toLowerCase();
}

export function normalizeEntity(value) {
  const normalized = normalizeLabel(value).replace(
    /\b\d{4}\s+(?:\d{4}|present)\b/gi,
    ""
  ).trim();
  return ENTITY_ALIASES.get(normalized) ?? normalized;
}
