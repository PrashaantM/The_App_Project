import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate fetching notifications
    setNotifications([
      { id: 1, message: 'Your test result is available.' },
      { id: 2, message: 'You have a new assignment.' },
    ]);
  }, []);

  return (
    <div>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
