import express from "express";
import "dovenv/config";
import gradeCompareRouter from "./routes/gradeCompare";

const app = express();
app.use(express.json());
app.use("api/grade-compare", gradeCompareRouter);

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});