import { tasks } from "./data.js";

export const allTasks = (req, res) => {
  res.status(200).json({ tasks });
};
