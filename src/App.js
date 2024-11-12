import React, { useState } from 'react';
import './App.css';
import logo_icon from './assets/logo.png';
import bullying_icon from './assets/bullying.png';
import Login from './components/Login';
import Signup from './components/Signup';
import Chatbot from './components/Chatbot';
import Profile from './components/Profile'; // Imported Profile component
import profile_logo from './assets/profile_logo.png';
import ForgotPassword from './components/ForgotPassword.js';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderContent = () => {
    switch (activeComponent) {
      case 'login':
  return <Login onForgotPassword={() => setActiveComponent('forgotPassword')} onSignupClick={() => setActiveComponent('signup')} />;
  case 'signup':
    return <Signup onLoginClick={() => setActiveComponent('login')} />;
  
      case 'chatbot':
        return <Chatbot onHomeClick={() => setActiveComponent('home')} />;
      case 'profile':
        return <Profile />;
        case 'forgotPassword':
          return <ForgotPassword onBackToLogin={() => setActiveComponent('login')} />;        
      default:
        return (
          <div className="content-container">
            <div className="text-section">
              <h2>Welcome to Billy - Buddy against Cyber Bullying</h2>
              <p>
                Our website aims to provide a supportive and safe environment for victims of cyberbullying, particularly among teenagers. 
                Through our user-friendly chatbot, "Billy," we offer instant support and comfort to those affected by cyberbullying.
              </p>
              <p>
                The platform enables users to report incidents anonymously to the cyber-crime department and provides statistics to monitor cybercrime trends. 
                We also foster a community where users can share experiences and learn from one another while accessing valuable resources and tips to empower themselves against cyberbullying.
              </p>
            </div>
            <div className="image-section">
              <img src={bullying_icon} alt="Cyberbullying Awareness" className="awareness-image" />
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="App">
      {/* Only show header if the active component is 'home' */}
      {activeComponent === 'home' && (
        <header className="header">
          <div className="title">
            <img src={logo_icon} alt="Logo" className="logo" />
            <h1>Billy - Buddy against Cyber Bullying</h1>
          </div>
          <nav className="nav-buttons">
            <button onClick={() => setActiveComponent('home')}>Home</button>
            <button onClick={() => setActiveComponent('login')}>Login</button>
            <button onClick={() => setActiveComponent('chatbot')}>Chatbot</button>
            <img
              src={profile_logo}
              alt="Profile Logo"
              className="profile-logo"
              onClick={() => setActiveComponent('profile')} // Added onClick to navigate to Profile
            />
          </nav>
        </header>
      )}

      <main className="content">
        {renderContent()}
      </main>

      {/* Only show footer if the active component is 'home' */}
      {activeComponent === 'home' && (
        <footer className="footer">
        <p>© 2024 Billy - Buddy against Cyber Bullying. All rights reserved.</p>
        <p>Contact us: <a href="mailto:support@billy.com">support@billy.com</a> | Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        
        <div className="social-media">
          <a href="https://www.facebook.com/billy" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://www.twitter.com/billy" target="_blank" rel="noopener noreferrer">Twitter</a> |
          <a href="https://www.instagram.com/billy" target="_blank" rel="noopener noreferrer">Instagram</a> |
          <a href="https://www.linkedin.com/company/billy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
      
      )}
    </div>
  );
}

export default App;
