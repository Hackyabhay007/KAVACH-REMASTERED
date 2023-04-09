import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWOEQxB2yTDWlKII2rCHlo9nAZ6FsOgKw",
  authDomain: "kavachwomensafetyapp.firebaseapp.com",
  databaseURL: "https://kavachwomensafetyapp-default-rtdb.firebaseio.com",
  projectId: "kavachwomensafetyapp",
  storageBucket: "kavachwomensafetyapp.appspot.com",
  messagingSenderId: "1014725336085",
  appId: "1:1014725336085:web:525458803da11e6605421c",
  measurementId: "G-JFZ0D7FR5M"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
