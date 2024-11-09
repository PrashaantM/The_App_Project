import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
import Courses from './Courses';
import Qbanks from './Qbanks';
import Notes from './Notes';
import VideoRecordings from './VideoRecordings';
import Tests from './Tests';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/qbanks">Qbanks</Link></li>
          <li><Link to="/notes">Notes</Link></li>
          <li><Link to="/video-recordings">Video Recordings</Link></li>
          <li><Link to="/tests">Tests</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <Calendar />
        <Courses />
        <Qbanks />
        <Notes />
        <VideoRecordings />
        <Tests />
      </div>
    </div>
  );
};

export default Dashboard;
