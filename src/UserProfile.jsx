// src/UserProfile.jsx
import React, { useState } from 'react';

const UserProfile = () => {
  // Example user data with useState for editing
  const [user, setUser] = useState({
    name: 'Enter your full name',
    email: 'enter your mail ID',
    age: 0,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle form submission (e.g., save changes)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically handle the save operation, like sending data to an API
    console.log('User data saved:', user);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={user.age}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UserProfile;
