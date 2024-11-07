import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to the App</h1>
      <nav>
        {user ? (
          <button onClick={() => auth.signOut()}>Logout</button>
        ) : (
          <Link to="/register">Sign Up</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
