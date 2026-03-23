// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPR6IQb5Xuf4SH8zCXPTcaTfh8D-QiyIA",
  authDomain: "fir-practice-14c57.firebaseapp.com",
  projectId: "fir-practice-14c57",
  storageBucket: "fir-practice-14c57.firebasestorage.app",
  messagingSenderId: "404581924199",
  appId: "1:404581924199:web:5302b36666664b482e03c2",
  measurementId: "G-K4HWG9HW6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);