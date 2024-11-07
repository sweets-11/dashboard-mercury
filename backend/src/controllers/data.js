export const data = [
  { date: "2024-07-01", desktop: 500, mobile: 450, amount: 600 },
  { date: "2024-07-02", desktop: 300, mobile: 350, amount: 750 },
  { date: "2024-07-03", desktop: 400, mobile: 380, amount: 550 },
  { date: "2024-07-04", desktop: 460, mobile: 500, amount: 900 },
  { date: "2024-07-05", desktop: 390, mobile: 420, amount: 500 },
  { date: "2024-07-06", desktop: 510, mobile: 470, amount: 650 },
  { date: "2024-07-07", desktop: 320, mobile: 300, amount: 200 },
  { date: "2024-07-08", desktop: 480, mobile: 440, amount: 750 },
  { date: "2024-07-09", desktop: 530, mobile: 510, amount: 850 },
  { date: "2024-07-10", desktop: 360, mobile: 380, amount: 450 },
  { date: "2024-07-11", desktop: 470, mobile: 490, amount: 700 },
  { date: "2024-07-12", desktop: 440, mobile: 430, amount: 550 },
  { date: "2024-07-13", desktop: 300, mobile: 320, amount: 300 },
  { date: "2024-07-14", desktop: 350, mobile: 370, amount: 400 },
  { date: "2024-07-15", desktop: 600, mobile: 580, amount: 950 },
  { date: "2024-07-16", desktop: 490, mobile: 470, amount: 550 },
  { date: "2024-07-17", desktop: 420, mobile: 410, amount: 480 },
  { date: "2024-07-18", desktop: 540, mobile: 520, amount: 900 },
  { date: "2024-07-19", desktop: 550, mobile: 530, amount: 1000 },
  { date: "2024-07-20", desktop: 460, mobile: 450, amount: 650 },
];

export const recentTransactions = {
  transactions: [
    {
      id: "txn_1",
      date: "2024-11-07",
      description: "Payment from Client A for Service",
      amount: 1200.0,
      balance: 16200.0, // Updated balance after this transaction
    },
    {
      id: "txn_2",
      date: "2024-11-06",
      description: "Payment from Client B for Product Purchase",
      amount: 2000.0,
      balance: 15000.0, // Updated balance after this transaction
    },
    {
      id: "txn_3",
      date: "2024-11-05",
      description: "Payment to Supplier X for Supplies",
      amount: -500.0, // Debit transaction (outflow), marked with a negative sign
      balance: 13000.0, // Updated balance after this transaction
    },
    {
      id: "txn_4",
      date: "2024-11-04",
      description: "Payment from Client C for Consulting Service",
      amount: 2500.0,
      balance: 13500.0, // Updated balance after this transaction
    },
    {
      id: "txn_5",
      date: "2024-11-03",
      description: "Payment for Advertising Services",
      amount: -300.0, // Debit transaction (outflow), marked with a negative sign
      balance: 11000.0, // Updated balance after this transaction
    },
    {
      id: "txn_6",
      date: "2024-11-02",
      description: "Payment from Client D for Software Subscription",
      amount: 1000.0,
      balance: 11300.0, // Updated balance after this transaction
    },
    {
      id: "txn_7",
      date: "2024-11-01",
      description: "Refund from Supplier Y for Overcharge",
      amount: 500.0,
      balance: 11800.0, // Updated balance after this transaction
    },
    {
      id: "txn_8",
      date: "2024-10-30",
      description: "Payment to Freelancer for Development Work",
      amount: -1200.0, // Debit transaction (outflow), marked with a negative sign
      balance: 10600.0, // Updated balance after this transaction
    },
    {
      id: "txn_9",
      date: "2024-10-29",
      description: "Payment from Client E for Design Services",
      amount: 800.0,
      balance: 11800.0, // Updated balance after this transaction
    },
    {
      id: "txn_10",
      date: "2024-10-28",
      description: "Payment for Office Rent",
      amount: -1500.0, // Debit transaction (outflow), marked with a negative sign
      balance: 11000.0, // Updated balance after this transaction
    },
    {
      id: "txn_11",
      date: "2024-10-27",
      description: "Payment from Client F for Monthly Subscription",
      amount: 1000.0,
      balance: 12500.0, // Updated balance after this transaction
    },
    {
      id: "txn_12",
      date: "2024-10-26",
      description: "Payment to Supplier Z for Raw Materials",
      amount: -600.0, // Debit transaction (outflow), marked with a negative sign
      balance: 11500.0, // Updated balance after this transaction
    },
    {
      id: "txn_13",
      date: "2024-10-25",
      description: "Payment from Client G for Marketing Campaign",
      amount: 2000.0,
      balance: 12100.0, // Updated balance after this transaction
    },
    {
      id: "txn_14",
      date: "2024-10-24",
      description: "Payment for Software Licenses",
      amount: -300.0, // Debit transaction (outflow), marked with a negative sign
      balance: 11800.0, // Updated balance after this transaction
    },
    {
      id: "txn_15",
      date: "2024-10-23",
      description: "Payment from Client H for SEO Services",
      amount: 1200.0,
      balance: 12100.0, // Updated balance after this transaction
    },
  ],
};

export const tasks = [
  {
    task: "Approve team invite for James King (requested by Landon Shepherd)",
    date: "Nov 6",
  },
  {
    task: "Approve $1,042.95 payment to Jason Green (requested by Aluna T.)",
    amount: "$1,042.95",
    date: "Nov 6",
  },
  {
    task: "Approve $5,000.00 recurring payment to Jason Green (requested by Aluna T.)",
    amount: "$5,000.00",
    recurring: true,
    date: "Nov 6",
  },
  {
    task: "Approve new daily maximum payment limit (requested by Landon Shepherd)",
    date: "Nov 6",
  },
  {
    task: "Approve enabling the dual admin approval policy (requested by Landon Shepherd)",
    date: "Nov 6",
  },
];
