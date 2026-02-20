const STORAGE_KEY = "financeData";
const BUDGET_KEY  = "budgetCap";


const SEED_DATA = [
  {
    id: "txn_1001",
    description: "Lunch at the cafeteria",
    amount: 24.50,
    category: "Food",
    date: "2025-10-15",
    createdAt: "2025-10-15T18:30:00Z",
    updatedAt: "2025-10-15T18:30:00Z",
  },
  {
    id: "txn_1002",
    description: "Programming textbook",
    amount: 75.99,
    category: "Books",
    date: "2025-10-14",
    createdAt: "2025-10-14T10:15:00Z",
    updatedAt: "2025-10-14T10:15:00Z",
  },
  {
    id: "txn_1003",
    description: "Monthly bus pass",
    amount: 45.00,
    category: "Transport",
    date: "2025-10-01",
    createdAt: "2025-10-01T09:00:00Z",
    updatedAt: "2025-10-01T09:00:00Z",
  },
  {
    id: "txn_1004",
    description: "Bread and juice",
    amount: 5.75,
    category: "Food",
    date: "2025-10-16",
    createdAt: "2025-10-16T08:45:00Z",
    updatedAt: "2025-10-16T08:45:00Z",
  },
  {
    id: "txn_1005",
    description: "Movie ticket",
    amount: 15.00,
    category: "Entertainment",
    date: "2025-10-12",
    createdAt: "2025-10-12T20:00:00Z",
    updatedAt: "2025-10-12T20:00:00Z",
  },
  {
    id: "txn_1006",
    description: "Brunch at the cafeteria",
    amount: 4.50,
    category: "Food",
    date: "2025-10-16",
    createdAt: "2025-10-16T14:30:00Z",
    updatedAt: "2025-10-16T14:30:00Z",
  },
  {
    id: "txn_1007",
    description: "Notebooks and pens",
    amount: 12.25,
    category: "Books",
    date: "2025-10-10",
    createdAt: "2025-10-10T16:20:00Z",
    updatedAt: "2025-10-10T16:20:00Z",
  },
  {
    id: "txn_1008",
    description: "Late night pizza",
    amount: 18.75,
    category: "Food",
    date: "2025-10-08",
    createdAt: "2025-10-08T23:45:00Z",
    updatedAt: "2025-10-08T23:45:00Z",
  },
  {
    id: "txn_1009",
    description: "Tuition installment",
    amount: 500.00,
    category: "Fees",
    date: "2025-10-05",
    createdAt: "2025-10-05T11:00:00Z",
    updatedAt: "2025-10-05T11:00:00Z",
  },
  {
    id: "txn_1010",
    description: "Gym membership",
    amount: 35.00,
    category: "Other",
    date: "2025-10-03",
    createdAt: "2025-10-03T07:30:00Z",
    updatedAt: "2025-10-03T07:30:00Z",
  },
];

function loadTransactions() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_DATA));
  return [...SEED_DATA];
}

function saveTransactions(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function createTransaction(description, amount, category, date) {
  return {
    id: "txn_" + Date.now() + Math.random().toString(36).substring(2, 7),
    description: description,
    amount: parseFloat(amount),
    category: category,
    date: date,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function loadBudgetCap() {
  const val = localStorage.getItem(BUDGET_KEY);
  return val ? parseFloat(val) : 500;
}

function saveBudgetCap(cap) {
  localStorage.setItem(BUDGET_KEY, String(cap));
}

function exportTransactionsJSON(transactions) {
  const blob = new Blob([JSON.stringify(transactions, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "transactions.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

/**
 * Read a JSON file and return the parsed transaction array.
 * @param {File} file
 * @returns {Promise<Array>}
 */
function importTransactionsJSON(file) {
  return new Promise(function (resolve, reject) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const parsed = JSON.parse(e.target.result);
        if (Array.isArray(parsed)) {
          resolve(parsed);
        } else {
          reject(new Error("Invalid data format – expected an array."));
        }
      } catch (err) {
        reject(new Error("Error parsing JSON file."));
      }
    };
    reader.readAsText(file);
  });
}
