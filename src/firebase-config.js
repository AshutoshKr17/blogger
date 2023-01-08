// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3AlZyz6_zLXjjmcANvElsS9PoddylY60",
  authDomain: "fir-b87a5.firebaseapp.com",
  projectId: "fir-b87a5",
  storageBucket: "fir-b87a5.appspot.com",
  messagingSenderId: "1032280169942",
  appId: "1:1032280169942:web:f13149a3b0449f0af6d877",
  measurementId: "G-JXJE7R4GNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();