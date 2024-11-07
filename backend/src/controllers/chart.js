import { data } from "./data.js";

export const chartData = (req, res) => {
  res.status(200).json({ chartData: data });
};
