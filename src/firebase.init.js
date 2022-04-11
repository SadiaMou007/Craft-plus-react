// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNBGy-y-h43KPC4V1sc0S0CWLDwHDhRyQ",
  authDomain: "ema-john-craft-plus.firebaseapp.com",
  projectId: "ema-john-craft-plus",
  storageBucket: "ema-john-craft-plus.appspot.com",
  messagingSenderId: "932072005410",
  appId: "1:932072005410:web:3e019ee6b7f37a7fd3cf7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
