import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { getQuizComparisons } from "../server/lib/comparisonEvidence.js";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(projectRoot, "src/generated/quizComparisons.json");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(getQuizComparisons(), null, 2)}\n`);

console.log(`Generated ${getQuizComparisons().length} comparison quizzes`);
