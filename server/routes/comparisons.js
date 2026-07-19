import express from "express";

import { getQuizComparisons } from "../lib/comparisonEvidence.js";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({ comparisons: getQuizComparisons() });
});

export default router;
