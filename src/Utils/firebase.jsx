import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";  
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk6LPm-pexQNyYRxBhjLFLq1e9jeA4Tog",
  authDomain: "netflixgpt-68fc4.firebaseapp.com",
  projectId: "netflixgpt-68fc4",
  storageBucket: "netflixgpt-68fc4.firebasestorage.app",
  messagingSenderId: "2790101520",
  appId: "1:2790101520:web:f58123dc9e0de999da3095",
  measurementId: "G-J1GX8K4YBY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
