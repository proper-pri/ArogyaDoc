import React, { useState, useEffect } from 'react';
import './components design/Dashboard.css'; // Include your CSS file

const Header = ({ toggleProfileDropdown, showProfileDropdown, toggleNotificationsDropdown, showNotificationsDropdown }) => {
  useEffect(() => {
    const handleClickOutside = () => {
      toggleProfileDropdown(false);
      toggleNotificationsDropdown(false);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [toggleProfileDropdown, toggleNotificationsDropdown]);

  return (
    <header className="header">
      <div className="header-left">
        <button className="back-button">&larr; Back</button>
        <h1>Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="profile">
          <div className="profile-icon" onClick={(e) => toggleProfileDropdown(!showProfileDropdown, e)}>
            &#128100; {/* Profile user icon */}
          </div>
          {showProfileDropdown && (
            <div className="notifications-dropdown">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
        <div className="profile">
          <div className="profile-icon" onClick={(e) => toggleNotificationsDropdown(!showNotificationsDropdown, e)}>
            &#128276; {/* Notification bell icon */}
          </div>
          {showNotificationsDropdown && (
            <div className="profile-dropdown">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
