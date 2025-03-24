import React, { useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';

const Dashboard = () => {
  const { totalIncome, totalExpenses, currentSavings, savingsGoal } = useContext(FinanceContext);

  const savingsPercentage = savingsGoal > 0 
    ? Math.min((currentSavings / savingsGoal) * 100, 100) 
    : 0;

  return (
    <div className="p-6 bg-gray-100 min-h-screen pb-20">
      <h1 className="text-2xl font-bold mb-6">Financial Dashboard</h1>
      
      <div className="grid gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Financial Summary</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-green-600 font-bold">${totalIncome.toFixed(2)}</p>
              <p className="text-xs">Total Income</p>
            </div>
            <div>
              <p className="text-red-600 font-bold">${totalExpenses.toFixed(2)}</p>
              <p className="text-xs">Total Expenses</p>
            </div>
            <div>
              <p className="text-blue-600 font-bold">${currentSavings.toFixed(2)}</p>
              <p className="text-xs">Current Savings</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Savings Goal Progress</h2>
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
      </div>
    </div>
  );
};

export default Dashboard;
