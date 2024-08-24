// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP2v8KNX0md3qd3UnmXebtursE5T3xRcA",
  authDomain: "netflixgpt-d86d0.firebaseapp.com",
  projectId: "netflixgpt-d86d0",
  storageBucket: "netflixgpt-d86d0.appspot.com",
  messagingSenderId: "115090193",
  appId: "1:115090193:web:49b101db4a55a6bb5722b0",
  measurementId: "G-RKCBER9TTC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
