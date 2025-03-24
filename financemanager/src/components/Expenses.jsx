import React, { useState, useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';
import { FaMoneyBillAlt } from 'react-icons/fa'; // React Icon example

const Expenses = () => {
  const { expenses, setExpenses } = useContext(FinanceContext);
  const [newExpense, setNewExpense] = useState({
    amount: '',
    description: '',
    category: '',
    date: new Date().toISOString().split('T')[0]
  });

  const categories = ['Food', 'Transportation', 'Housing', 'Utilities', 'Entertainment', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
    setNewExpense({ 
      amount: '', 
      description: '', 
      category: '', 
      date: new Date().toISOString().split('T')[0] 
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen pb-20">
      <h1 className="text-2xl font-bold mb-6">Expenses</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="grid gap-4">
          <input 
            type="number" 
            placeholder="Amount" 
            value={newExpense.amount}
            onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
          <input 
            type="text" 
            placeholder="Description" 
            value={newExpense.description}
            onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
          <select 
            value={newExpense.category} 
            onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input 
            type="date" 
            value={newExpense.date}
            onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
          <button 
            type="submit" 
            className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Add Expense
          </button>
        </div>
      </form>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Expenses List</h2>
        {expenses.length === 0 ? (
          <p className="text-center text-gray-500">No expenses entries yet</p>
        ) : (
          <div className="divide-y">
            {expenses.map((item) => (
              <div key={item.id} className="py-2 flex justify-between">
                <div>
                  <p className="font-semibold">${item.amount}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Expenses;
