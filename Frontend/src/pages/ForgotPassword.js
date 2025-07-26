import React, { useState } from 'react';
import './Login.css'; // Reuse the same styling

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Add backend integration for forgot-password
    setSubmitted(true);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="medstock-title">Medstock</h1>
        <h2>Forgot Password</h2>
        <p>Enter your email to reset your password</p>
        {submitted ? (
          <p style={{ color: 'green' }}>Password reset link sent to your email.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Send Reset Link</button>
          </form>
        )}
      </div>
    </div>
  );
}
