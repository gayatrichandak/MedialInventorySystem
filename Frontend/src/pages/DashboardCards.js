import React from 'react';
import './DashboardCards.css';
import { FaCapsules, FaExclamationTriangle, FaClock, FaDollarSign } from 'react-icons/fa';

const DashboardCards = () => {
  const cards = [
    {
      title: 'Total Stock',
      value: 1200,
      icon: <FaCapsules />,
      color: '#3a8dff',
    },
    {
      title: 'Low Inventory',
      value: 58,
      icon: <FaExclamationTriangle />,
      color: '#ff9800',
    },
    {
      title: 'Expiring Soon',
      value: 35,
      icon: <FaClock />,
      color: '#f44336',
    },
    {
      title: 'This Month Revenue',
      value: '₹42,000',
      icon: <FaDollarSign />,
      color: '#4caf50',
    },
  ];

  return (
    <div className="dashboard-cards">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-icon" style={{ backgroundColor: card.color }}>
            {card.icon}
          </div>
          <div className="card-details">
            <h4>{card.title}</h4>
            <p>{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
