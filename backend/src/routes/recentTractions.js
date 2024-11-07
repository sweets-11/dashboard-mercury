import express from "express";
import { recentTransactions } from "../controllers/recentTransactions.js";

const app = express.Router();

app.get("/transaction", recentTransactions);

export default app;
