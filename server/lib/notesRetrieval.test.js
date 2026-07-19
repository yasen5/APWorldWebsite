import assert from "node:assert/strict";
import test from "node:test";

import {
  createNotesLookup,
  formatNotesForPrompt,
  getNotes,
} from "./notesRetrieval.js";
import { getQuizComparisons } from "./comparisonEvidence.js";

test("retrieves only the requested societies' notes", () => {
  const goldenHorde = getNotes("Golden Horde", [1200, 1450]);
  const yuan = getNotes("Yuan Dynasty", [1200, 1450]);

  assert.ok(goldenHorde?.notes.some((note) => note.includes("Russian princes")));
  assert.ok(yuan?.notes.some((note) => note.includes("Kublai/Kubilai Khan")));
  assert.notDeepEqual(goldenHorde?.notes, yuan?.notes);
});

test("supports aliases and uses the requested period to disambiguate notes", () => {
  assert.equal(getNotes("Soviet Union", [1900, 2025])?.entity, "USSR");
  assert.equal(getNotes("Britain", [1750, 1900])?.entity, "England 1750-1900");
});

test("retrieves notes for several quiz comparison pairs", () => {
  const pairs = [
    ["Mayans", "Aztecs", [1200, 1450]],
    ["England 1750-1900", "France 1750-1900", [1750, 1900]],
    ["China", "USSR", [1900, 2025]],
  ];

  for (const [entityA, entityB, period] of pairs) {
    assert.ok(getNotes(entityA, period));
    assert.ok(getNotes(entityB, period));
  }
});

test("has notes for every society offered by the quiz catalog", () => {
  for (const quiz of getQuizComparisons()) {
    assert.ok(getNotes(quiz.country1, quiz.timePeriod), quiz.country1);
    assert.ok(getNotes(quiz.country2, quiz.timePeriod), quiz.country2);
  }
});

test("returns undefined for unknown or ambiguous entities", () => {
  assert.equal(getNotes("Unknown Society", [1200, 1450]), undefined);
  assert.equal(getNotes("Britain"), undefined);
});

test("malformed notes data fails gracefully", () => {
  const emptyLookup = createNotesLookup(null);
  const partialLookup = createNotesLookup({
    Broken: { periods: "1200-1450", notes: null },
  });

  assert.equal(emptyLookup("Anything"), undefined);
  assert.equal(partialLookup("Broken"), undefined);
  assert.match(
    formatNotesForPrompt("Society A", "Broken", undefined),
    /No notes available/
  );
});
