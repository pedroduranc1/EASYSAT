import { initializeApp } from 'firebase/app';
import { getAuth, deleteUser } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCUsdzag6kqlqZ_kshGdDluclR6jC_6nFw",
  authDomain: "dgya-fb.firebaseapp.com",
  projectId: "dgya-fb",
  storageBucket: "dgya-fb.appspot.com",
  messagingSenderId: "793437038075",
  appId: "1:793437038075:web:6f0bd360c86fd76a40d75e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage, deleteUser };
