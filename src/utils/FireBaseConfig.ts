// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxt152zdyDilYH9pXY_i5EVbdzNnttKlI",
  authDomain: "zoom-clone-6df9e.firebaseapp.com",
  projectId: "zoom-clone-6df9e",
  storageBucket: "zoom-clone-6df9e.appspot.com",
  messagingSenderId: "974928967512",
  appId: "1:974928967512:web:c809dbf0aefc22ee13572d",
  measurementId: "G-XKF7N1NJBT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
