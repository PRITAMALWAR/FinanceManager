import React, { useState, useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';
import { FaMoneyCheckAlt } from 'react-icons/fa'; // React Icons example

const Income = () => {
  const { income, setIncome } = useContext(FinanceContext);
  const [newIncome, setNewIncome] = useState({
    amount: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIncome([...income, { ...newIncome, id: Date.now() }]);
    setNewIncome({ amount: '', description: '', date: new Date().toISOString().split('T')[0] });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen pb-20">
      <h1 className="text-2xl font-bold mb-6">Income</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="grid gap-4">
          <input 
            type="number" 
            placeholder="Amount" 
            value={newIncome.amount}
            onChange={(e) => setNewIncome({...newIncome, amount: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
          <input 
            type="text" 
            placeholder="Description" 
            value={newIncome.description}
            onChange={(e) => setNewIncome({...newIncome, description: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
          <input 
            type="date" 
            value={newIncome.date}
            onChange={(e) => setNewIncome({...newIncome, date: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Add Income
          </button>
        </div>
      </form>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Income List</h2>
        {income.length === 0 ? (
          <p className="text-center text-gray-500">No income entries yet</p>
        ) : (
          <div className="divide-y">
            {income.map((item) => (
              <div key={item.id} className="py-2 flex justify-between">
                <div>
                  <p className="font-semibold">${item.amount}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Income;
