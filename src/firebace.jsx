// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOeyP-G_9kZilPD84eEolW0A0hOJB1rGc",
  authDomain: "chatreact2023.firebaseapp.com",
  projectId: "chatreact2023",
  storageBucket: "chatreact2023.appspot.com",
  messagingSenderId: "502669370633",
  appId: "1:502669370633:web:b25a36e68d81e4aedf5fd8"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);