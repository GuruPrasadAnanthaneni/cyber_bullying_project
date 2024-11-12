import React, { useState } from 'react';
import './ForgotPassword.css'

const ForgotPassword = ({ onBackToLogin }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Implement password reset logic here
    console.log('Reset link sent to', email);
  };

  return (
    <div className="forgot-container">
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <button onClick={onBackToLogin}>Back to Login</button>
    </div>
    </div>
  );
};

export default ForgotPassword;
