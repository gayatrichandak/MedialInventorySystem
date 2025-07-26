
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SettingsPage.css';
// import MainLayout from '../components/MainLayout';
const SettingsPage = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const name = user?.name || 'User';
  const email = user?.email || 'user@example.com';

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    // <MainLayout>
    <div className="settings-container">
      <h2>Profile Settings</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
    // </MainLayout>
  );
};

export default SettingsPage;
