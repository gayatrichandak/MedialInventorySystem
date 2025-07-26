
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Paracetamol', stock: 120 },
  { name: 'Aspirin', stock: 80 },
  { name: 'Cetrizine', stock: 50 },
  { name: 'Amoxicillin', stock: 100 },
];

const StockChart = () => {
  return (
    <div className="chart-card">
      <h3>Stock Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="stock" fill="#007BFF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
