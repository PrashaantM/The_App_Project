// src/Dashboard.js
import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import Courses from './Courses';
import Qbanks from './Qbanks';
import Notes from './Notes';
import VideoRecordings from './VideoRecordings';
import Tests from './Tests';
import Calendar from './Calendar';
import Analysis from './Analysis';
import Feedback from './Feedback';
import Notifications from './Notifications';
import UserProfile from './UserProfile';

function Dashboard() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/onboarding');
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/qbanks">Qbanks</Link></li>
          <li><Link to="/notes">Notes</Link></li>
          <li><Link to="/videos">Video Recordings</Link></li>
          <li><Link to="/tests">Tests</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/analysis">Analysis</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
        </ul>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/qbanks" element={<Qbanks />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/videos" element={<VideoRecordings />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
