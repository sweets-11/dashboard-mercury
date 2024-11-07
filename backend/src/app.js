import express from "express";
import cors from "cors";

import chartRoute from "./routes/chart.js";
import recentTractions from "./routes/recentTractions.js";
import tasks from "./routes/tasks.js";

const port = 4000;

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});

app.use("/api/v1", chartRoute);
app.use("/api/v1", recentTractions);
app.use("/api/v1", tasks);

app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});
