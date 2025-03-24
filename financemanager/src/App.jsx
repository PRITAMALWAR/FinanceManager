import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Transactions from './components/Transactions';
import Savings from './components/Savings';
import Navbar from './components/Navbar';
import { FinanceProvider } from './context/FinanceContext';

const App = () => {
  return (
    <FinanceProvider>
        <div className="max-w-md mx-auto relative min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Navbar />
        </div>
    </FinanceProvider>
  );
};

export default App;
