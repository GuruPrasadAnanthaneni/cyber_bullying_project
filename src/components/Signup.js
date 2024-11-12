import React, { useState } from 'react';
import './Auth.css';

const Signup = ({ onLoginClick }) => { // Receive onLoginClick as a prop
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="auth-wrapper">
    <div className="auth-container">
      <form onSubmit={handleSignup} className="auth-form">
        <h2>Signup</h2>
        <p>Create your account and join us today.</p>
        <input type="text" placeholder="Enter Your Username" required />
        <input type="email" placeholder="Enter Your Email" required />
        <input type="tel" placeholder="Enter Your Phone Number" required />
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
        <button type="submit">Signup</button>
        <p>
          Already have an account?{' '}
          <a href="#" className="login-link" onClick={onLoginClick}> {/* Use onLoginClick here */}
            Login
          </a>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Signup;
