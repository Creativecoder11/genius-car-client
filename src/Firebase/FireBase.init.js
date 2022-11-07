// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnXdJmAeZpU3wAIXfOigWlBjHUnoUCZrs",
  authDomain: "genius-car-e35b2.firebaseapp.com",
  projectId: "genius-car-e35b2",
  storageBucket: "genius-car-e35b2.appspot.com",
  messagingSenderId: "470418388156",
  appId: "1:470418388156:web:8e2e16d9feb0383f1dccb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;