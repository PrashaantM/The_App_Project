import React, { useState } from 'react';
import '../styles/login.css'; // Ensure the correct path

const Login = ({ showForm, setShowForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (showForm === 'login') {
      alert('Login successful');
    } else if (showForm === 'register') {
      // Ensure passwords match for registration
      if (password !== confirmPassword) {
        alert('Passwords do not match');
      } else {
        alert('Registration successful');
      }
    }
  };

  return (
    <div className="login-container">
      <h1>{showForm === 'login' ? 'Login' : 'Register'}</h1>
      <form onSubmit={handleFormSubmit} className="login-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {showForm === 'register' && (
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        )}
        <button type="submit">{showForm === 'login' ? 'Login' : 'Register'}</button>
        <button type="button" onClick={() => setShowForm(null)}>
          Back
        </button>
      </form>
    </div>
  );
};

export default Login;
