import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYUKeVW7cAIeNC6HrRBfOScvMFFbdh09I",
  authDomain: "react-assignment-aca38.firebaseapp.com",
  projectId: "react-assignment-aca38",
  storageBucket: "react-assignment-aca38.appspot.com",
  messagingSenderId: "799255119636",
  appId: "1:799255119636:web:606ec5c85b66ec6dc3e401",
  measurementId: "G-4Q1VVRWDPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
