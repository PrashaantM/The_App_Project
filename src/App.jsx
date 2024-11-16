// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Profile from './components/Profile';
import Courses from './components/Courses';
import Calendar from './components/Calendar';
import Feedback from './components/Feedback';
import QBanks from './components/QBanks';
import Notes from './components/Notes';
import VideoRecordings from './components/VideoRecordings';
import Tests from './components/Tests';
import Analysis from './components/Analysis';
import Notifications from './components/Notifications';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Dashboard /> : <Onboarding onAuth={() => setIsAuthenticated(true)} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/q-banks" element={<QBanks />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/video-recordings" element={<VideoRecordings />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
