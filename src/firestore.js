import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJfC97xztMC31UXosiiJRoCryl9UlDxTo",
  authDomain: "react-with-firebase-1966e.firebaseapp.com",
  projectId: "react-with-firebase-1966e",
  storageBucket: "react-with-firebase-1966e.appspot.com",
  messagingSenderId: "287431625373",
  appId: "1:287431625373:web:611ff99302a8d7ec806274",
  measurementId: "G-PXV0LM9R0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firestore database
export const database = getFirestore(app);