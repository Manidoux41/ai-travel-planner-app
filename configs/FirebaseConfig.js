// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVOBd8u6LXngY-FPcXP-riklD6Eq2Q-Y8",
  authDomain: "startup-8bca9.firebaseapp.com",
  projectId: "startup-8bca9",
  storageBucket: "startup-8bca9.appspot.com",
  messagingSenderId: "245373519301",
  appId: "1:245373519301:web:1f69ac3d65c0f3f749b7ac",
  measurementId: "G-MT2TZC7XMZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
