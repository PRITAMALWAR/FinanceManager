import React, { createContext, useState, useEffect } from 'react';

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [income, setIncome] = useState(() => 
    JSON.parse(localStorage.getItem('income')) || []
  );
  const [expenses, setExpenses] = useState(() => 
    JSON.parse(localStorage.getItem('expenses')) || []
  );
  const [savingsGoal, setSavingsGoal] = useState(() => 
    parseInt(localStorage.getItem('savingsGoal')) || 0
  );

  useEffect(() => {
    localStorage.setItem('income', JSON.stringify(income));
  }, [income]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('savingsGoal', savingsGoal);
  }, [savingsGoal]);

  const totalIncome = income.reduce((sum, item) => sum + parseFloat(item.amount), 0);
  const totalExpenses = expenses.reduce((sum, item) => sum + parseFloat(item.amount), 0);
  const currentSavings = totalIncome - totalExpenses;

  return (
    <FinanceContext.Provider value={{
      income,
      setIncome,
      expenses,
      setExpenses,
      totalIncome,
      totalExpenses,
      currentSavings,
      savingsGoal,
      setSavingsGoal
    }}>
      {children}
    </FinanceContext.Provider>
  );
};
