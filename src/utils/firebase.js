import { initializeApp } from 'firebase/app';
import { getAuth, deleteUser } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBDekSTSUDkvlLPxn-Bb3j5VIx8AMlH-f0",
  authDomain: "db-dgya.firebaseapp.com",
  projectId: "db-dgya",
  storageBucket: "db-dgya.appspot.com",
  messagingSenderId: "259603737842",
  appId: "1:259603737842:web:62aadf7ad9ebe188d1746b",
  measurementId: "G-FSTTJV51TL",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage, deleteUser };
