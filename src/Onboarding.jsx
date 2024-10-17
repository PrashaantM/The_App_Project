import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Onboarding({ onComplete }) {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    name: '',
    age: ''
  });
  
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFinish = () => {
    // You can save the formData to Firebase here if needed.
    // onComplete can also save user data to global state or Firebase if necessary.

    // After completing the onboarding, navigate to the dashboard
    onComplete(); // Call the function to complete onboarding
    navigate('/'); // Redirect to the dashboard (root path or update it as per your route)
  };

  return (
    <div className="onboarding">
      <h2>Welcome to the App!</h2>
      <p>Please enter your details to get started:</p>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="button" onClick={handleFinish}>
          Finish Onboarding
        </button>
      </form>
    </div>
  );
}

export default Onboarding;



