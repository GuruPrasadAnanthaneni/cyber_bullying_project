import React, { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import Chatbot from './components/Chatbot';
import ActiveRecords from './components/Activerecords';
import HistoryRecords from './components/HistoryRecords';
import logo_icon from './assets/logo.png';
import bullying_icon from './assets/bullying.png';
import profile_logo from './assets/profile_logo.png';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderContent = () => {
    switch (activeComponent) {
      case 'profile':
        return <Profile />;
        case 'ActiveRecords': 
          return <ActiveRecords />;
        case 'HistoryRecords':
          return <HistoryRecords/>;
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
      {/* Header */}
      <header className="header">
        <div className="logo-title">
          <img src={logo_icon} alt="Logo" className="logo"
          onClick={() => window.location.reload()}
          style={{ cursor: 'pointer' }}
          />
          <h1>Billy - Buddy against Cyber Bullying</h1>
        </div>
        <div className="nav-buttons">
          <button onClick={() => setActiveComponent('ActiveRecords')}>Active Records</button>
          <button onClick={() => setActiveComponent('HistoryRecords')}>History Records</button>
          <img
            src={profile_logo}
            alt="Profile"
            className="profile-logo"
            onClick={() => setActiveComponent('profile')}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="content">{renderContent()}</main>

      {/* Chatbot */}
      <Chatbot />

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Billy - Buddy against Cyber Bullying. All rights reserved.</p>
        <p>
          Contact us: <a href="mailto:support@billy.com">support@billy.com</a> | Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
        </p>
        <div className="social-media">
          <a href="https://www.facebook.com/billy" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://www.twitter.com/billy" target="_blank" rel="noopener noreferrer">Twitter</a> |
          <a href="https://www.instagram.com/billy" target="_blank" rel="noopener noreferrer">Instagram</a> |
          <a href="https://www.linkedin.com/company/billy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
