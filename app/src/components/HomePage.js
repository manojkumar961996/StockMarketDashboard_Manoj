// HomePage.js
import React from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="form-column">
        <div className="form-item">
          <RegistrationForm />
        </div>
        <div className="form-item">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
