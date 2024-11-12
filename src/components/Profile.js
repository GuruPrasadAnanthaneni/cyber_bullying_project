import React, { useState } from 'react';
import './Profile.css'; // Optional: Add styling for profile page

const Profile = () => {
  // Example user data
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    password: 'password123',
  });

  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Update the password logic here
    setUserData({ ...userData, password: newPassword });
    alert('Password changed successfully!');
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
      </div>
      <div className="change-password">
        <h3>Change Password</h3>
        <form onSubmit={handlePasswordChange}>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
