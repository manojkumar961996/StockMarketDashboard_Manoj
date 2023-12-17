// NavigationBar.js
import React from 'react';
import './NavigationBar.css';
import '../assets/logoi.jpg'

const NavigationBar = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../assets/logoi.jpg" alt="Logo" />
        <span>Stock Market Dashboard</span>
      </div>
      <div className="navbar-date">
        <span>{currentDate}</span>
      </div>
    </nav>
  );
};

export default NavigationBar;
