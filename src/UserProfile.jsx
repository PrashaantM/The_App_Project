// src/components/UserProfile.jsx
import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase'; // Ensure correct import paths
import { doc, getDoc } from 'firebase/firestore';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const user = auth.currentUser;

  useEffect(() => {
    console.log('Current User:', user); // Debugging line

    const fetchUserData = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.error("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.error("User is not authenticated");
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div>
      <h2>User Profile</h2>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Display additional user data as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
