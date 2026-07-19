import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import ts from "typescript";

const sourcePath = "src/notes/notes.ts";
const outputPath = "data/whap-notes.json";
const sourceText = readFileSync(sourcePath, "utf8");
const source = ts.createSourceFile(
  sourcePath,
  sourceText,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TS
);

function propertyName(node) {
  if (
    ts.isIdentifier(node) ||
    ts.isStringLiteral(node) ||
    ts.isNumericLiteral(node)
  ) {
    return node.text;
  }
  throw new Error(`Unsupported property name in ${sourcePath}`);
}

let countryNotes;
let generalNotes;

function findNotesObjects(node) {
  if (
    ts.isVariableDeclaration(node) &&
    node.initializer &&
    ts.isObjectLiteralExpression(node.initializer)
  ) {
    if (node.name.getText(source) === "countryNotes") countryNotes = node.initializer;
    if (node.name.getText(source) === "generalNotes") generalNotes = node.initializer;
  }
  ts.forEachChild(node, findNotesObjects);
}

findNotesObjects(source);
if (!countryNotes) throw new Error(`Could not find countryNotes in ${sourcePath}`);
if (!generalNotes) throw new Error(`Could not find generalNotes in ${sourcePath}`);

const dateRangePattern =
  /^\d{3,4}(?:bc|ce)?\s*(?:-|to)\s*\d{3,4}(?:bc|ce)?[,]?$/i;
const namePeriodPattern = /\b(\d{4}\s*-\s*(?:\d{4}|present))\b/i;
const output = {};

for (const entityProperty of countryNotes.properties) {
  if (
    !ts.isPropertyAssignment(entityProperty) ||
    !ts.isObjectLiteralExpression(entityProperty.initializer)
  ) {
    throw new Error("countryNotes must contain only entity object literals");
  }

  const entityName = propertyName(entityProperty.name);
  const periods = new Set();
  const notes = new Set();
  const namePeriod = entityName.match(namePeriodPattern)?.[1];
  if (namePeriod) periods.add(namePeriod.replace(/\s/g, "").toLowerCase());

  for (const section of entityProperty.initializer.properties) {
    if (
      !ts.isPropertyAssignment(section) ||
      !ts.isArrayLiteralExpression(section.initializer)
    ) {
      throw new Error(`Notes for ${entityName} must be arrays of strings`);
    }

    for (const note of section.initializer.elements) {
      if (!ts.isStringLiteral(note) && !ts.isNoSubstitutionTemplateLiteral(note)) {
        throw new Error(`Unsupported note value for ${entityName}`);
      }

      const value = note.text.trim();
      if (!value) continue;
      if (dateRangePattern.test(value)) {
        periods.add(
          value
            .replace(/,$/, "")
            .replace(/\s+to\s+/i, "-")
            .replace(/\s/g, "")
            .toLowerCase()
        );
      } else {
        notes.add(value);
      }
    }
  }

  output[entityName] = {
    periods: [...periods],
    notes: [...notes],
  };
}

for (const topicProperty of generalNotes.properties) {
  if (
    !ts.isPropertyAssignment(topicProperty) ||
    !ts.isObjectLiteralExpression(topicProperty.initializer)
  ) {
    throw new Error("generalNotes must contain only topic object literals");
  }

  let applicableCountries = [];
  let period;
  const topicNotes = [];

  for (const field of topicProperty.initializer.properties) {
    if (
      !ts.isPropertyAssignment(field) ||
      !ts.isArrayLiteralExpression(field.initializer)
    ) {
      throw new Error("General note fields must be arrays");
    }

    const fieldName = propertyName(field.name);
    if (fieldName === "applicableCountries") {
      applicableCountries = field.initializer.elements.map((value) => value.text);
    } else if (fieldName === "timePeriod") {
      const [start, end] = field.initializer.elements.map((value) => Number(value.text));
      period = `${start}-${end >= 2025 ? "present" : end}`;
    } else if (fieldName !== "emphasizedUnit") {
      for (const note of field.initializer.elements) {
        if (ts.isStringLiteral(note) || ts.isNoSubstitutionTemplateLiteral(note)) {
          topicNotes.push(note.text.trim());
        }
      }
    }
  }

  for (const entityName of applicableCountries) {
    const entry = output[entityName];
    if (!entry) continue;
    if (period && !entry.periods.includes(period)) entry.periods.push(period);
    for (const note of topicNotes) {
      if (note && !entry.notes.includes(note)) entry.notes.push(note);
    }
  }
}

mkdirSync("data", { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Generated notes for ${Object.keys(output).length} entities`);
