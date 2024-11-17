import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Determines if it's the login or sign-up page
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert('Login successful');
    } else {
      alert('Sign-up successful');
    }
  };

  return (
    <div className="login-container">
      <div className="nav-buttons">
        <button
          className={isLogin ? 'active' : ''}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={!isLogin ? 'active' : ''}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>
      <h1 className={isLogin ? 'highlight-login' : 'highlight-signup'}>
        {isLogin ? 'Login' : 'Sign Up'}
      </h1>
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
        <button type="submit">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
