//import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database

import "firebase/storage"; // If using Firebase storage
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import "firebase/auth";
import "firebase/firestore";

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

//require('firebase/auth')
export const firebaseConfig = {
  apiKey: "AIzaSyDJraAatmuzz_hggdnvzuk8ptq3rYfIW34",
  authDomain: "profilebuilder-973c6.firebaseapp.com",
  projectId: "profilebuilder-973c6",
  storageBucket: "profilebuilder-973c6.appspot.com",
  messagingSenderId: "58607604211",
  appId: "1:58607604211:web:79e0787226cb497661c286",
  measurementId: "G-KSNZDQ4PLY",
};

// Initialize Firebase
export const fire = firebase.initializeApp(
  firebaseConfig
  //   {
  //   ...firebaseConfig,
  //   projectId: firebaseConfig?.projectId,
  // }
);
export const db = getFirestore(fire);
