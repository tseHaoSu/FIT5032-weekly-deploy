import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useFirebaseApp, useFirebaseAuth, useFirestore } from "vuefire";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB30tgrnYRbTH0CkuPtVWAAXqvK9d1qdCM",
  authDomain: "fit5032-week7-b7bec.firebaseapp.com",
  projectId: "fit5032-week7-b7bec",
  storageBucket: "fit5032-week7-b7bec.appspot.com",
  messagingSenderId: "145042006257",
  appId: "1:145042006257:web:8057355ea0aa03c445c950",
  measurementId: "G-SC7JY7JS5J",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp);

// Initialize Firestore
const db = getFirestore(firebaseApp);

export {
  firebaseApp,
  auth,
  db,
  createUserWithEmailAndPassword,
  useFirebaseApp,
  useFirebaseAuth,
  useFirestore,
  signInWithEmailAndPassword,
  signOut,
};
