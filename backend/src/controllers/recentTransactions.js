import { recentTransactions as Transactions } from "./data.js";
export const recentTransactions = (req, res) => {
  try {
    res.status(200).json({ recentTransactions: Transactions });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
