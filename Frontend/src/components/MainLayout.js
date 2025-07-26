
// import React from 'react';
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';

// const MainLayout = ({ children }) => {
//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar />
//       <div style={{ flex: 1 }}>
//         <Navbar />
//         <div style={{ padding: '20px' }}>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;
// src/components/MainLayout.js
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
