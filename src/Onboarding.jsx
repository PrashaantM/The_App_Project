import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Onboarding({ onComplete }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFinish = () => {
    // You can save formData to Firebase or global state here.
    onComplete();
    navigate('/'); // Redirect to the dashboard after onboarding
  };

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup forms
  };

  return (
    <div className="container">
      <input type="checkbox" id="check" checked={!isLogin} onChange={toggleForm} />
      
      {/* Login Form */}
      {isLogin && (
        <div className="login form">
          <header>Login</header>
          <form>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <a href="#">Forgot password?</a>
            <input type="button" className="button" value="Login" onClick={handleFinish} />
          </form>
          <div className="signup">
            <span>Don't have an account? <label htmlFor="check">Signup</label></span>
          </div>
        </div>
      )}

      {/* Signup Form */}
      {!isLogin && (
        <div className="registration form">
          <header>Signup</header>
          <form>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Create a password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <input type="button" className="button" value="Signup" onClick={handleFinish} />
          </form>
          <div className="signup">
            <span>Already have an account? <label htmlFor="check">Login</label></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Onboarding;


