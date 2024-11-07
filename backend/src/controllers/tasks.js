import { tasks } from "./data.js";

export const allTasks = (req, res) => {
  try {
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
