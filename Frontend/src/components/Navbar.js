


// // Navbar.js
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import { FaSearch, FaBell } from 'react-icons/fa';
// import Cookies from 'js-cookie'; // npm install js-cookie

// const userName = Cookies.get('UserName');



// const Navbar = () => {
//   const [userName, setUserName] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Read cookie value
//     const name = document.cookie
//       .split('; ')
//       .find(row => row.startsWith('user_name='))
//       ?.split('=')[1];
    
//     if (name) {
//       setUserName(decodeURIComponent(name));
//     }
//   }, []);

//   const handleLogout = () => {
//     // Clear local storage
//     localStorage.clear();

//     // Clear cookies by expiring them
//     document.cookie = 'auth_token=; Max-Age=0; path=/; Secure; SameSite=Strict';
//     document.cookie = 'user_name=; Max-Age=0; path=/; Secure; SameSite=Strict';

//     // Redirect to login
//     navigate('/login');
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-left">
//         <h2>MedStock</h2>
//       </div>

//       <div className="navbar-center">
//         <div className="search-box">
//           <FaSearch className="search-icon" />
//           <input type="text" placeholder="Search..." />
//         </div>
//       </div>

//       <div className="navbar-right">
//         <FaBell className="icon" />
//         <span className="username">{userName}</span>
//         <button onClick={handleLogout} className="logout-button">Logout</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
//no notification vala
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import { FaSearch, FaBell } from 'react-icons/fa';
// import axios from 'axios';

// const Navbar = () => {
//   const [userName, setUserName] = useState('');
//   const [notifications, setNotifications] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const name = document.cookie
//       .split('; ')
//       .find(row => row.startsWith('user_name='))
//       ?.split('=')[1];
//     if (name) setUserName(decodeURIComponent(name));
//   }, []);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/notification')
//       .then(res => setNotifications(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleLogout = () => {
//     localStorage.clear();
//     document.cookie = 'auth_token=; Max-Age=0; path=/;';
//     document.cookie = 'user_name=; Max-Age=0; path=/;';
//     navigate('/login');
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-left">
//         <h2>MedStock</h2>
//       </div>

//       <div className="navbar-center">
//         <div className="search-box">
//           <FaSearch className="search-icon" />
//           <input type="text" placeholder="Search..." />
//         </div>
//       </div>

//       <div className="navbar-right">
//         <div className="notification-wrapper">
//           <FaBell className="icon" onClick={() => setShowDropdown(!showDropdown)} />
//           {showDropdown && (
//             <div className="notification-dropdown">
//               {notifications.length === 0 ? (
//                 <p>No new notifications</p>
//               ) : (
//                 notifications.map((n, idx) => (
//                   <div key={idx} className="notification-item">
//                     <p>{n.message}</p>
//                     <span className="notification-date">
//                       {new Date(n.createdAt).toLocaleString()}
//                     </span>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}
//         </div>
//         <span className="username">{userName}</span>
//         <button onClick={handleLogout} className="logout-button">Logout</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import { FaSearch, FaBell } from 'react-icons/fa';
// import axios from 'axios';

// const Navbar = () => {
//   const [userName, setUserName] = useState('');
//   const [notifications, setNotifications] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const navigate = useNavigate();

//   // ✅ Extract username from cookies
//   useEffect(() => {
//     const name = document.cookie
//       .split('; ')
//       .find(row => row.startsWith('user_name='))
//       ?.split('=')[1];
//     if (name) setUserName(decodeURIComponent(name));
//   }, []);

//   // ✅ Fetch notifications from backend
//   useEffect(() => {
//     axios.get('http://localhost:5000/api/notification')  // ⬅ Replace with process.env.REACT_APP_API_URL if needed
//       .then(res => setNotifications(res.data))
//       .catch(err => console.error('Error fetching notifications:', err));
//   }, []);

//   // ✅ Logout handler
//   const handleLogout = () => {
//     localStorage.clear();
//     document.cookie = 'auth_token=; Max-Age=0; path=/;';
//     document.cookie = 'user_name=; Max-Age=0; path=/;';
//     navigate('/login');
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-left">
//         <h2>MedStock</h2>
//       </div>

//       <div className="navbar-center">
//         <div className="search-box">
//           <FaSearch className="search-icon" title="Search Icon" />
//           <input type="text" placeholder="Search..." />
//         </div>
//       </div>

//       <div className="navbar-right">
//         <div className="notification-wrapper">
//           <FaBell
//             className="icon"
//             title="Notifications"
//             onClick={() => setShowDropdown(!showDropdown)}
//           />
//           {showDropdown && (
//             <div className="notification-dropdown">
//               {notifications.length === 0 ? (
//                 <p>No new notifications</p>
//               ) : (
//                 notifications.map((n, idx) => (
//                   <div key={idx} className="notification-item">
//                     <p>{n.message}</p>
//                     <span className="notification-date">
//                       {new Date(n.createdAt).toLocaleString()}
//                     </span>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}
//         </div>

//         <span className="username">{userName}</span>
//         <button onClick={handleLogout} className="logout-button">
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

//new for search 
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaSearch, FaBell } from 'react-icons/fa';
import axios from 'axios';

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // ✅ Get username from cookie
  useEffect(() => {
    const name = document.cookie
      .split('; ')
      .find(row => row.startsWith('user_name='))
      ?.split('=')[1];
    if (name) setUserName(decodeURIComponent(name));
  }, []);

  // ✅ Load notifications
  useEffect(() => {
    axios.get('http://localhost:5000/api/notification')
      .then(res => setNotifications(res.data))
      .catch(err => console.error('Error fetching notifications:', err));
  }, []);

  // ✅ Handle search on Enter key
  const handleSearchKey = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  // ✅ Handle logout
  const handleLogout = () => {
    localStorage.clear();
    document.cookie = 'auth_token=; Max-Age=0; path=/;';
    document.cookie = 'user_name=; Max-Age=0; path=/;';
    navigate('/login');
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>MedStock</h2>
      </div>

      <div className="navbar-center">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearchKey}
          />
        </div>
      </div>

      <div className="navbar-right">
        <div className="notification-wrapper">
          <FaBell
            className="icon"
            title="Notifications"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="notification-dropdown">
              {notifications.length === 0 ? (
                <p>No new notifications</p>
              ) : (
                notifications.map((n, idx) => (
                  <div key={idx} className="notification-item">
                    <p>{n.message}</p>
                    <span className="notification-date">
                      {new Date(n.createdAt).toLocaleString()}
                    </span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <span className="username">{userName}</span>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
