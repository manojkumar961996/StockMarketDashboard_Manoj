import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css"; // Import LoginForm-specific styles

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add login logic here
    if (formData.username === 'abc' && formData.password === '123') {
      // Simulate successful login
      console.log('Login successful!');
      // Navigate to the dashboard page
      navigate('/DashboardPage'); // Replace '/dashboard' with the actual route for your dashboard
    } else {
      console.log('Login failed. Invalid credentials.');
    }
  };

  return (
    <div className="form-container"> {/* Apply shared styling class */}
      <h2>Login Form</h2>
      <form className="form" onSubmit={handleSubmit}> {/* Apply shared styling class */}
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;