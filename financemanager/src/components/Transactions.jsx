import React, { useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';
import { FaListAlt } from 'react-icons/fa'; // React Icon

const Transactions = () => {
  const { income, expenses } = useContext(FinanceContext);

  // Combine income and expenses to display as transactions
  const transactions = [
    ...income.map((item) => ({ ...item, type: 'Income' })),
    ...expenses.map((item) => ({ ...item, type: 'Expense' })),
  ];

  // Sort transactions by date (most recent first)
  const sortedTransactions = transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="p-6 bg-gray-100 min-h-screen pb-20">
      <h1 className="text-2xl font-bold mb-6">Transactions</h1>
      <div className="bg-white p-4 rounded-lg shadow">
        {transactions.length === 0 ? (
          <p className="text-center text-gray-500">No transactions found</p>
        ) : (
          <div className="divide-y">
            {sortedTransactions.map((item) => (
              <div key={item.id} className="py-2 flex justify-between">
                <div>
                  <p className={`font-semibold ${item.type === 'Income' ? 'text-green-600' : 'text-red-600'}`}>
                    ${item.amount}
                  </p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                  <p className="text-xs text-gray-400">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
