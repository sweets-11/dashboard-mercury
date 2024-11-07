import express from "express";
import { chartData } from "../controllers/chart.js";

const app = express.Router();

app.get("/chartData", chartData);

export default app;
