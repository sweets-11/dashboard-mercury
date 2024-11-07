import { recentTransactions as Transactions } from "./data.js";

export const recentTransactions = (req, res) => {
  res.status(200).json({ recentTransactions: Transactions });
};
