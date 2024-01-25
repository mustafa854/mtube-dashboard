// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Hqtf7YMt6huh31da2LTcwTFsHEzVzYw",
  authDomain: "react-crud-b92cc.firebaseapp.com",
  projectId: "react-crud-b92cc",
  storageBucket: "react-crud-b92cc.appspot.com",
  messagingSenderId: "565919185867",
  appId: "1:565919185867:web:9b0784a41a0ae09978d44e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
