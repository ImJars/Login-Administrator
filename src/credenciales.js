// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARnF41oiuMo0WQuslhIIJ4-WUWTbTPZkw",
  authDomain: "login-administrator.firebaseapp.com",
  projectId: "login-administrator",
  storageBucket: "login-administrator.firebasestorage.app",
  messagingSenderId: "624588061686",
  appId: "1:624588061686:web:cfdf13dc0a664dea58e5d7"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;