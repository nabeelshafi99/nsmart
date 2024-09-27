import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBb2wiJbTL3zM_IDZNeInv-ZGAlNf4M0Ss",
  authDomain: "nsblog-nabeel.firebaseapp.com",
  projectId: "nsblog-nabeel",
  storageBucket: "nsblog-nabeel.appspot.com",
  messagingSenderId: "915222013148",
  appId: "1:915222013148:web:cd8c3a8e4d06e6e7494019"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
    auth,
    db,
    storage
}