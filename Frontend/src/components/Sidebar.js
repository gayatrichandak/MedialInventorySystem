
// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FaHome, FaPills, FaShoppingCart, FaChartBar, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">MedStock</div>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className="sidebar-link">
          <FaHome className="sidebar-icon" />
          Dashboard
        </NavLink>
        <NavLink to="/medicines" className="sidebar-link">
          <FaPills className="sidebar-icon" />
          Medicines
        </NavLink>
        <NavLink to="/sales" className="sidebar-link">
          <FaShoppingCart className="sidebar-icon" />
          Sales
        </NavLink>
        <NavLink to="/reports" className="sidebar-link">
          <FaChartBar className="sidebar-icon" />
          Reports
        </NavLink>
        <NavLink to="/settings" className="sidebar-link">
          <FaCog className="sidebar-icon" />
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
