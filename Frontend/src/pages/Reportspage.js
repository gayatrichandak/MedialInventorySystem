

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ReportsPage.css';

const ReportsPage = () => {
  const [summary, setSummary] = useState({
    totalMedicines: 0,
    totalSales: 0,
    lowStock: 0,
    outOfStock: 0,
    expiringSoon: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchReports = async () => {
      try {
        const medRes = await axios.get('https://localhost:7180/api/Medicine', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const salesRes = await axios.get('https://localhost:7180/api/Sales', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const today = new Date();
        const in30Days = new Date();
        in30Days.setDate(today.getDate() + 30);

        let lowStock = 0, outOfStock = 0, expiringSoon = 0;

        medRes.data.forEach((item) => {
          if (item.stock === 0) outOfStock++;
          else if (item.stock < 10) lowStock++;

          const expiry = new Date(item.expiryDate);
          if (expiry < in30Days && expiry > today) expiringSoon++;
        });

        setSummary({
          totalMedicines: medRes.data.length,
          totalSales: salesRes.data.length,
          lowStock,
          outOfStock,
          expiringSoon,
        });
      } catch (err) {
        console.error('Report fetch error:', err);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="reports-container">
      <h2>Inventory Reports</h2>
      <div className="report-grid">
        <div className="report-card">Total Medicines: {summary.totalMedicines}</div>
        <div className="report-card">Total Sales: {summary.totalSales}</div>
        <div className="report-card">Low Inventory: {summary.lowStock}</div>
        <div className="report-card">Out of Stock: {summary.outOfStock}</div>
        <div className="report-card">Expiring Soon: {summary.expiringSoon}</div>
      </div>
    </div>
  );
};

export default ReportsPage;
