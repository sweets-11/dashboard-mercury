import { data } from "./data.js";

export const chartData = (req, res) => {
  try {
    res.status(200).json({ chartData: data });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
