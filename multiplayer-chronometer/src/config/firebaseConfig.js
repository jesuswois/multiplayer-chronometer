// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(process.env)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  databaseURL:process.env.REACT_APP_DATABASE_URL,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app)
