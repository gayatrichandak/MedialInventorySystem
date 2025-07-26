

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:7180/api',
   withCredentials: true,
  headers: 
  {
    'Content-Type': 'application/json',
  },
 
});

// Attach token if available
instance.interceptors.request.use(config => 
  {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
