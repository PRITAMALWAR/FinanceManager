import React, { useState, useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';
import { FaPiggyBank } from 'react-icons/fa'; // React Icon

const Savings = () => {
  const { savingsGoal, setSavingsGoal, currentSavings } = useContext(FinanceContext);
  const [newGoal, setNewGoal] = useState(savingsGoal);

  const handleGoalChange = (e) => {
    setNewGoal(e.target.value);
  };

  const handleSaveGoal = () => {
    setSavingsGoal(newGoal);
  };

  const savingsPercentage = savingsGoal > 0 
    ? Math.min((currentSavings / savingsGoal) * 100, 100) 
    : 0;

  return (
    <div className="p-6 bg-gray-100 min-h-screen pb-20">
      <h1 className="text-2xl font-bold mb-6">Savings Goal</h1>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Set Your Savings Goal</h2>
        <div className="flex items-center gap-4">
          <input 
            type="number" 
            placeholder="Enter Goal Amount" 
            value={newGoal}
            onChange={handleGoalChange}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleSaveGoal}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Save Goal
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Savings Progress</h2>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div 
            className="bg-blue-600 h-4 rounded-full" 
            style={{ width: `${savingsPercentage}%` }}
          ></div>
        </div>
        <p className="text-center text-sm">
          {savingsPercentage.toFixed(2)}% of goal achieved
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mt-6">
        <h2 className="text-xl font-semibold mb-4">Current Savings</h2>
        <p className="text-xl font-bold text-blue-600">${currentSavings.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Savings;
