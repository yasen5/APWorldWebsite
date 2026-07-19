import express from "express";
import "dotenv/config";
import gradeCompareRouter from "./routes/gradeCompare.js";
import comparisonsRouter from "./routes/comparisons.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/grade-compare", gradeCompareRouter);
app.use("/api/comparisons", comparisonsRouter);

const PORT = process.env.PORT || 3001;

app.get("/api/health", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
