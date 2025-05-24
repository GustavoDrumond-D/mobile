import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD_r_nHSi1N93kUfAyds7G7_xVHznk-68",
  authDomain: "ilovemovies-6134e.firebaseapp.com",
  projectId: "ilovemovies-6134e",
  storageBucket: "ilovemovies-6134e.firebasestorage.app",
  messagingSenderId: "718980194160",
  appId: "1:718980194160:web:482b775468f6f12dfdb9b5",
  measurementId: "G-WD5TDEKMD7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);



export {db, auth};