// src/components/ProfileEdit.jsx
import React, { useState } from 'react';
import '../styles/profile.css'; // Import the CSS file

function ProfileEdit({ initialData, onSave }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="profile-edit">
      <h2>Edit Profile</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Tell us about yourself"
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default ProfileEdit;
