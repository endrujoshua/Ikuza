// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import "firebase/auth"
import "firebase/firestore"
import { doc, setDoc } from "firebase/firestore"; 
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF0P_LS6mmygNUu4OF2cze2cAAg1sl01k",
  authDomain: "ikuza-f9f15.firebaseapp.com",
  projectId: "ikuza-f9f15",
  storageBucket: "ikuza-f9f15.appspot.com",
  messagingSenderId: "332743558243",
  appId: "1:332743558243:web:be91190d94c4973efda456"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth()
const firestore = firebase.firestore()

/*create database on load */
await db.collection('product'), data;

export { firebaseAuth, firestore }
