import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Registration from './Registration';
import GoogleLogin from './GoogleLogin';
import UserProfile from './UserProfile'; // Updated import for UserProfile
import Profile from './profile';
import Courses from './Courses';
import Qbanks from './Qbanks';
import Notes from './Notes';
import VideoRecordings from './VideoRecordings';
import Tests from './Tests';
import Calendar from './Calendar';
import Analysis from './Analysis';
import Feedback from './Feedback';
import Notifications from './Notifications';
import Onboarding from './Onboarding'; // Import Onboarding component



function Dashboard() {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  // Function to mark onboarding as complete
  const completeOnboarding = () => {
    setIsOnboardingComplete(true);
  };

  return (
    <div className="dashboard">
      {!isOnboardingComplete ? (
        <Onboarding onComplete={completeOnboarding} />
      ) : (
        <>
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
          </div>

          <div className="main-content">
            <Routes>
              <Route path="/courses" element={<Courses />} />
              <Route path="/qbanks" element={<Qbanks />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/videos" element={<VideoRecordings />} />
              <Route path="/tests" element={<Tests />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/google-login" element={<GoogleLogin />} />
              <Route path="/profile" element={<UserProfile />} /> 
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Dashboard />
      </div>
    </Router>
  );
}



export default App;
