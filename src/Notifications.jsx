// src/components/Notifications.jsx
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const notificationsCollection = collection(db, 'notifications');
      const notificationsSnapshot = await getDocs(notificationsCollection);
      const notificationsList = notificationsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNotifications(notificationsList);
    };

    fetchNotifications();
  }, []);

  const markAsRead = async (id) => {
    const notificationRef = doc(db, 'notifications', id);
    await updateDoc(notificationRef, { read: true });
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notif) => (
          <li key={notif.id}>
            <p>{notif.message}</p>
            <button onClick={() => markAsRead(notif.id)}>
              {notif.read ? 'Read' : 'Mark as Read'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
