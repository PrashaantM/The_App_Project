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
      <li><Link to="/Analysis">Analysis</Link></li>
      <li><Link to="/notes">Notes</Link></li>
      <li><Link to="/notifications">Notifications</Link></li>
      <li><Link to="/qbanks">Qbanks</Link></li>
      <li><Link to="/tests">tests</Link></li>
      <li><Link to="/VideoRecordings">Videorecordings</Link></li>
      
    </ul>
  </div>
);

export default Sidebar;
