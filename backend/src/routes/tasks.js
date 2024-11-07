import express from "express";
import { allTasks } from "../controllers/tasks.js";

const app = express.Router();

app.get("/tasks", allTasks);

export default app;
