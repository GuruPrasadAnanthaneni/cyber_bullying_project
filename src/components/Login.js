import React, { useState } from 'react';
import './Auth.css';
import ForgotPassword from './ForgotPassword.js';

const Login = ({ onSignupClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeComponent, setActiveComponent] = useState('login'); // Manage the active component

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const goToForgotPassword = () => {
    setActiveComponent('forgotPassword'); // Change active component to ForgotPassword
  };

  const goToLogin = () => {
    setActiveComponent('login'); // Change active component back to Login
  };

  const renderContent = () => {
    if (activeComponent === 'forgotPassword') {
      return <ForgotPassword onBackToLogin={goToLogin} />;
    }

    return (
      <div className="auth-wrapper">
      <div className="auth-container">
        <form onSubmit={handleLogin} className="auth-form">
          <h2>Login</h2>
          <p>Welcome back!</p>
          <input type="text" placeholder="Enter Your Username / Email" required />
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Your Password"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-password"
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <a href="#" className="forgot-password" onClick={goToForgotPassword}>
            Forgot Password?
          </a>
          <button type="submit">Login</button>
          <p>
            Don’t have an account?{' '}
            <a href="#" className="signup-link" onClick={onSignupClick}>Signup</a>
          </p>
        </form>
      </div>
      </div>
    );
  };

  return renderContent();
};

export default Login;
