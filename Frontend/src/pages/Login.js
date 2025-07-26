

//fresh one for Note the withCredentials: true – this allows cookie transfer from backend.
// login.js
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import API from '../api/axios';
// import './Login.css';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await API.post('/auth/login', { email, password }, { withCredentials: true });

//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('email', email);
//         if (rememberMe) {
//           localStorage.setItem('rememberMe', 'true');
//         } else {
//           localStorage.removeItem('rememberMe');
//         }

//         navigate('/dashboard');
//       } else {
//         alert('Login failed: No token received.');
//       }
//     } catch (err) {
//       alert(err.response?.data || 'Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h1 className="medstock-title">Medstock</h1>
//         <h2>Welcome Back</h2>
//         <p>Sign in to your account</p>
//         <form onSubmit={handleLogin}>
//           <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
//           <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
//           <div className="login-options">
//             <label>
//               <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
//               Remember me
//             </label>
//             <Link to="/forgot-password">Forgot password?</Link>
//           </div>
//           <button type="submit">Sign In</button>
//         </form>
//         <p>Don't have an account? <Link to="/register">Create account</Link></p>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api/axios';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/Auth/login', { email, password }, { withCredentials: true });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));

        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('rememberMe');
        }

        navigate('/dashboard');
      } else {
        alert('Login failed: No token received.');
      }
    } catch (err) {
      alert(err.response?.data || 'Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="medstock-title">Medstock</h1>
        <h2>Welcome Back</h2>
        <p>Sign in to your account</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-options">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account? <Link to="/register">Create account</Link></p>
      </div>
    </div>
  );
}
