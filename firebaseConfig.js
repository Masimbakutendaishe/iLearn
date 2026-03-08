// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVa10GbxFyIq30cQwdWsHjYxKcMEcZa8c",

  authDomain: "ilearn3.firebaseapp.com",

  projectId: "ilearn3",

  storageBucket: "ilearn3.firebasestorage.app",

  messagingSenderId: "12005226459",

  appId: "1:12005226459:web:a246554ad95563789819fe",

  measurementId: "G-S3E0J7J0LL"
  };

  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };