import assert from "node:assert/strict";
import test from "node:test";

import {
  findComparisonEvidence,
  getQuizComparisons,
} from "./comparisonEvidence.js";

test("finds a dated quiz label and exact period", () => {
  const evidence = findComparisonEvidence(
    "England 1750-1900",
    "France 1750-1900",
    [1750, 1900]
  );

  assert.equal(evidence?.requestedPeriod, "1750-1900");
  assert.equal(evidence?.similarities.length, 3);
  assert.equal(evidence?.differences.length, 2);
});

test("matches aliases and either entity order", () => {
  const evidence = findComparisonEvidence(
    "Zimbabwe Kingdom",
    "Mali Empire",
    [1200, 1450]
  );

  assert.match(evidence?.comparisonId ?? "", /mali-empire--great-zimbabwe/);
});

test("maps territory labels to colonial empires", () => {
  const evidence = findComparisonEvidence(
    "British Territory",
    "Spanish Territory",
    [1750, 1900]
  );

  assert.match(evidence?.comparisonId ?? "", /british-empire--spanish-empire/);
});

test("maps the modern quiz period to 1900-present", () => {
  const evidence = findComparisonEvidence(
    "China",
    "USSR",
    [1900, 2025]
  );

  assert.equal(evidence?.requestedPeriod, "1900-present");
  assert.equal(evidence?.similarities.length, 9);
});

test("returns undefined when the bundle has no pair-specific entry", () => {
  assert.equal(
    findComparisonEvidence("Hausa States", "Songhai Kingdom", [1450, 1750]),
    undefined
  );
});

test("builds every offered quiz directly from database comparisons", () => {
  const quizzes = getQuizComparisons();

  assert.ok(quizzes.length >= 46);
  assert.equal(new Set(quizzes.map(({ id }) => id)).size, quizzes.length);
  for (const quiz of quizzes) {
    assert.ok(quiz.country1);
    assert.ok(quiz.country2);
    assert.ok(findComparisonEvidence(quiz.country1, quiz.country2, quiz.timePeriod));
  }
});
