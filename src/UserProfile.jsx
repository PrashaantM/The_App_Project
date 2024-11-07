// src/UserProfile.js
import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
          setFormData(userDoc.data());
        }
      }
    };
    fetchUserData();
  }, [user]);

  const handleEdit = () => setIsEditing(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (user) {
      await updateDoc(doc(db, 'users', user.uid), formData);
      setUserData(formData);
      setIsEditing(false);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      {userData ? (
        <div>
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                placeholder="Name"
              />
              <input
                type="number"
                name="age"
                value={formData.age || ''}
                onChange={handleChange}
                placeholder="Age"
              />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Age:</strong> {userData.age}</p>
              <button onClick={handleEdit}>Edit Profile</button>
            </>
          )}
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default UserProfile;
