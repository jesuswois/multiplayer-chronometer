// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ6FiCYQR7QRyR8OXI7XNv-V-4KooJZ2I",
  databaseURL:'https://synch-clock-default-rtdb.firebaseio.com/',
  authDomain: "synch-clock.firebaseapp.com",
  projectId: "synch-clock",
  storageBucket: "synch-clock.firebasestorage.app",
  messagingSenderId: "789841693069",
  appId: "1:789841693069:web:198f272a94a0af0d1895c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app)
