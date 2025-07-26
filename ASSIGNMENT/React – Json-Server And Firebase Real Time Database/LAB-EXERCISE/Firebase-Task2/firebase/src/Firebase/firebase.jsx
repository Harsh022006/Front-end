// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAswLM5IvgdGhmWv3JbE9QSetvH12MIg58",
  authDomain: "fir-dbb90.firebaseapp.com",
  databaseURL: "https://fir-dbb90-default-rtdb.firebaseio.com",
  projectId: "fir-dbb90",
  storageBucket: "fir-dbb90.firebasestorage.app",
  messagingSenderId: "55495135662",
  appId: "1:55495135662:web:722688f734c16d106f383f",
  measurementId: "G-MQ33F1LZ7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);