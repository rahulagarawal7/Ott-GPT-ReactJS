// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk_pd1aoIBcrYHuUaiXx9YNHVsT08BHcU",
  authDomain: "netflixgpt-191ac.firebaseapp.com",
  projectId: "netflixgpt-191ac",
  storageBucket: "netflixgpt-191ac.appspot.com",
  messagingSenderId: "241949567969",
  appId: "1:241949567969:web:cf4ef0b64b6d24ac7580a0",
  measurementId: "G-Y14Q3GL5VH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
