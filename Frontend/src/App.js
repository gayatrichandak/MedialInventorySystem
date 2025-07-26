import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Medicines from './pages/Medicines';
import Sales from './pages/Sales';
//import Search from './pages/Search';
import SearchPage from './pages/SearchPage'; 
//import MainLayout from './components/MainLayout';
import ReportsPage from './pages/Reportspage';
import SettingsPage from './pages/SettingsPage';
import PrivateRoute from './auth/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes using PrivateRoute */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/medicines" element={<PrivateRoute><Medicines /></PrivateRoute>} />
        <Route path="/sales" element={<PrivateRoute><Sales /></PrivateRoute>} />
        {/* <Route path="/search" element={<PrivateRoute><Search /></PrivateRoute>} /> */}
        <Route path="/search" element={<PrivateRoute><SearchPage /></PrivateRoute>} /> ✅

        <Route path="/reports" element={<PrivateRoute><ReportsPage /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
