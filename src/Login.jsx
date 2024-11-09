import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [inputOtp, setInputOtp] = useState('');
  const navigate = useNavigate();

  const handleOtpSend = () => {
    if (email) {
      setIsOtpSent(true);
      setOtp('1234'); // Simulate sending OTP
      alert('OTP sent to your registered phone number!');
    } else {
      alert('Please enter your email.');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputOtp === otp) {
      alert('Login successful!');
      navigate('/profile');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="button" onClick={handleOtpSend}>
          Send OTP
        </button>
        {isOtpSent && (
          <input
            type="text"
            value={inputOtp}
            onChange={(e) => setInputOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
        )}
        <button type="submit" disabled={!isOtpSent}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
