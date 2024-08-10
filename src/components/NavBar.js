import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.png';  // Import the logo image

const categories = ['Music', 'Art', 'Technology', 'Food', 'Sports'];

const NavBar = ({ isLoggedIn, onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" /> {/* Logo image */}
        <div className="navbar-title">Event Nexus</div>
      </div>
      <div className="navbar-links">
        {isLoggedIn ? (
          <>
            <Link to="/home">Home</Link>
            <div className="navbar-dropdown">
              <button className="dropdown-toggle" onClick={toggleDropdown}>Categories</button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {categories.map(category => (
                    <Link
                      key={category}
                      to={`/events/${category}`}
                      onClick={() => setIsDropdownOpen(false)}
                      className="dropdown-item"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/profile">Profile</Link>
            <Link to="/create-event">Create Event</Link>
            <Link to="/register">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
