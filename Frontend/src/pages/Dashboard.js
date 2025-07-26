

// import React from 'react';
// import MainLayout from '../components/MainLayout';
// import DashboardCards from './DashboardCards';

// const Dashboard = () => {
//   return (
//     <MainLayout>
//       <h2 style={{ marginBottom: '20px' }}>Dashboard</h2>
//       <DashboardCards />
//     </MainLayout>
//   );
// };

// export default Dashboard;



// src/pages/Dashboard.js
import React from 'react';
import MainLayout from '../components/MainLayout';
import DashboardCards from './DashboardCards';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <MainLayout>
      <h2 style={{ marginBottom: '20px' }}>Dashboard</h2>
      <DashboardCards />
      
      {/* Table centered in middle */}
      <div className="recent-activity-wrapper">
        <div className="recent-activity">
          <h3 className="recent-activity-title">Recent Activity</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Medicine</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-07-20</td>
                <td>Paracetamol</td>
                <td>Tablet</td>
                <td>100</td>
                <td>Sold</td>
              </tr>
              <tr>
                <td>2025-07-19</td>
                <td>Ibuprofen</td>
                <td>Capsule</td>
                <td>60</td>
                <td>Added</td>
              </tr>
              <tr>
                <td>2025-07-18</td>
                <td>Amoxicillin</td>
                <td>Syrup</td>
                <td>30</td>
                <td>Expired</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
