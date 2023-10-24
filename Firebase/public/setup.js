// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwbrvnd5Ncd7Hlv08xcJRje2ZuwLzmjEc",
  authDomain: "comascriptworld.firebaseapp.com",
  projectId: "comascriptworld",
  storageBucket: "comascriptworld.appspot.com",
  messagingSenderId: "482429157622",
  appId: "1:482429157622:web:d74f720de6d994406c2cd7",
  measurementId: "G-H6KTW6GKRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log()
