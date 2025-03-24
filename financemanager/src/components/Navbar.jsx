import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaDollarSign, FaMoneyBillAlt, FaList, FaPiggyBank } from 'react-icons/fa'; // React Icons

const NavLink = ({ to, icon, label }) => {
  return (
    <Link 
      to={to} 
      className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl z-50">
      <div className="flex justify-around py-3">
        <NavLink to="/" icon={<FaHome size={24} />} label="Home" />
        <NavLink to="/income" icon={<FaDollarSign size={24} />} label="Income" />
        <NavLink to="/expenses" icon={<FaMoneyBillAlt size={24} />} label="Expenses" />
        <NavLink to="/transactions" icon={<FaList size={24} />} label="Transactions" />
        <NavLink to="/savings" icon={<FaPiggyBank size={24} />} label="Savings" />
      </div>
    </nav>
  );
};

export default Navbar;
