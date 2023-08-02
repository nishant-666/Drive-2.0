import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDX4Wrz1VCtEUhXfe9bkro9V4J_Wj4Tu5g",
  authDomain: "firedrive-218d5.firebaseapp.com",
  projectId: "firedrive-218d5",
  storageBucket: "firedrive-218d5.appspot.com",
  messagingSenderId: "660142855896",
  appId: "1:660142855896:web:a967fa4c02e0f091d629ad",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
