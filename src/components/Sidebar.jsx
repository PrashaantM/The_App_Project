// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <h2>Dashboard</h2>
    <ul>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/calendar">Calendar</Link></li>
      <li><Link to="/feedback">Feedback</Link></li>
    </ul>
  </div>
);

export default Sidebar;
