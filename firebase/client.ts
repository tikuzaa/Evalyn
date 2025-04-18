// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqdS2h_3_tJQHkxj_U3eoA5dNTD6Ez6lU",
  authDomain: "evalyn-97965.firebaseapp.com",
  projectId: "evalyn-97965",
  storageBucket: "evalyn-97965.firebasestorage.app",
  messagingSenderId: "337990069720",
  appId: "1:337990069720:web:376f9a65dc246f90ad16ad",
  measurementId: "G-SS87RJQH0S"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);