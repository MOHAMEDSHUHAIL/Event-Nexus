
import React, { useState } from 'react';
import './ProfilePage.css';  // Custom CSS for styling
import { FaFacebookF,  FaGoogle } from 'react-icons/fa'; // Import icons for social media buttons
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const AccountSettings = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    password: '',
    language: 'English',
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Info Updated:', userInfo);
    setIsEditMode(false);
  };

  return (
    <div className="account-settings-container">
      <h2>Profile</h2>

      {!isEditMode ? (
        <div className="view-mode">
          <div className="form-group">
            <label>First Name:</label>
            <p>{userInfo.firstName}</p>
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <p>{userInfo.lastName}</p>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <p>{userInfo.email}</p>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <p>******</p>
          </div>
          <div className="form-group">
            <label>Language:</label>
            <p>{userInfo.language}</p>
          </div>

          <button onClick={handleEditClick} className="edit-button">Edit</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={userInfo.firstName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={userInfo.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Language</label>
            <select name="language" value={userInfo.language} onChange={handleInputChange}>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>

          <button type="submit" className="save-button">Save Changes</button>
        </form>
      )}

      <div className="linked-accounts-section">
        <h3>Linked Accounts</h3>
        <p>Link your social media accounts</p>
        <div className="social-media-buttons">
          <button className="social-media-button"><FaFacebookF /></button>
          <button className="social-media-button"><FontAwesomeIcon icon={faXTwitter} /></button>
          <button className="social-media-button"><FaGoogle /></button>
        </div>
      </div>

      <div className="email-preferences-section">
        <h3>Email Preferences</h3>
        <p>Manage your email notifications</p>
        {/* Add options to manage email notifications here */}
      </div>
    </div>
  );
};

export default AccountSettings;
