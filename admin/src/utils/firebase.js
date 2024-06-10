import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "fullstackblogwebsite.firebaseapp.com",
  projectId: "fullstackblogwebsite",
  storageBucket: "fullstackblogwebsite.appspot.com",
  messagingSenderId: "739234201699",
  appId: "1:739234201699:web:6de7e66bb73bb87d9a3856"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);