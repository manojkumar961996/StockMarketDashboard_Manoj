import React from 'react';
import './NavigationBar.css';


const NavigationBar = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="navbar-logo-text">Stock Market Dashboard</span>
      </div>
      <div className="navbar-date">
        <span className="navbar-date-text">{currentDate}</span>
      </div>
    </nav>
  );
};

export default NavigationBar;