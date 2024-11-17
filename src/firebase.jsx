// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyA8BanNc5vFzBWlhTbmh4qFMJxLKFSoMNw",
    authDomain: "the-app-project-7b10c.firebaseapp.com",
    projectId: "the-app-project-7b10c",
    storageBucket: "the-app-project-7b10c.firebasestorage.app",
    messagingSenderId: "759768964402",
    appId: "1:759768964402:web:64adf539af69674866cb2b",
    measurementId: "G-1LG524SDDF"
  };
  

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);

export { app, analytics, auth, db, messaging };
