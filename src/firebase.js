// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX4F0JL5OQLkjOZjrRq6JdWohD3YuaC2k",
  authDomain: "nakesh-6a89a.firebaseapp.com",
  projectId: "nakesh-6a89a",
  storageBucket: "nakesh-6a89a.firebasestorage.app",
  messagingSenderId: "246365940777",
  appId: "1:246365940777:web:fdf628c6f5f54ed4e60038",
  measurementId: "G-E0E5XSR7N8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
