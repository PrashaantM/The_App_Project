// src/components/ProfileEdit.jsx
import React, { useState } from 'react';

const ProfileEdit = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('123-456-7890');

  const handleSaveChanges = () => {
    alert('Profile updated successfully!');
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSaveChanges}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileEdit;
