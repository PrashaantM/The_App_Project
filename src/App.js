import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHeader from './MainHeader';
import Dashboard from './Dashboard';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import Login from './Login';
import Registration from './Registration';
import PrivateRoute from './PrivateRoute';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) setIsAuthenticated(true);
  }, []);

  return (
    <Router>
      <div className="App">
        <MainHeader />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/profile/edit" component={ProfileEdit} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
