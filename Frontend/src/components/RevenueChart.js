

// import React from 'react';
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
// } from 'recharts';

// const data = [
//   { month: 'Jan', revenue: 4000 },
//   { month: 'Feb', revenue: 3200 },
//   { month: 'Mar', revenue: 5000 },
//   { month: 'Apr', revenue: 4300 },
//   { month: 'May', revenue: 6100 },
//   { month: 'Jun', revenue: 7200 },
// ];

// const RevenueChart = () => {
//   return (
//     <div className="chart-card">
//       <h3>Monthly Revenue</h3>
//       <ResponsiveContainer width="100%" height={250}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Line type="monotone" dataKey="revenue" stroke="#28a745" strokeWidth={2} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default RevenueChart;

// src/components/RevenueChart.js
// import React from 'react';
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
// } from 'recharts';
// import './RevenueChart.css'; // ➜ Add this CSS file

// const data = [
//   { month: 'Jan', revenue: 4000 },
//   { month: 'Feb', revenue: 3200 },
//   { month: 'Mar', revenue: 5000 },
//   { month: 'Apr', revenue: 4300 },
//   { month: 'May', revenue: 6100 },
//   { month: 'Jun', revenue: 7200 },
// ];

// const RevenueChart = () => {
//   return (
//     <div className="revenue-chart-wrapper">
//       <div className="chart-card">
//         <h3>Monthly Revenue</h3>
//         <ResponsiveContainer width="100%" height={250}>
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="revenue" stroke="#28a745" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default RevenueChart;


// src/components/RevenueChart.js
// import React from 'react';
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
// } from 'recharts';
// import './RevenueChart.css';

// const RevenueChart = ({ data }) => {
//   return (
//     <div className="revenue-chart-card">
//       <h3>Monthly Revenue</h3>
//       <ResponsiveContainer width="100%" height={250}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Line type="monotone" dataKey="revenue" stroke="#28a745" strokeWidth={2} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default RevenueChart;

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const RevenueChart = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#1e3a8a" />
          <YAxis stroke="#1e3a8a" />
          <Tooltip
            contentStyle={{ backgroundColor: '#f0f4ff', border: '1px solid #1e3a8a' }}
            labelStyle={{ color: '#1e3a8a' }}
          />
          <Bar dataKey="revenue" fill="#1e3a8a" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
