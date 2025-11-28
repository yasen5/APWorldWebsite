import express from "express";
import "dotenv/config";
import gradeCompareRouter from "./routes/gradeCompare.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/grade-compare", gradeCompareRouter);

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});