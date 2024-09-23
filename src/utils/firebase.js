import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCeTtDaid-pn_7g-kMbWZlOobqjd-otDr8",
  authDomain: "ecommerce-nabeelshafi.firebaseapp.com",
  projectId: "ecommerce-nabeelshafi",
  storageBucket: "ecommerce-nabeelshafi.appspot.com",
  messagingSenderId: "124387962059",
  appId: "1:124387962059:web:8c0da6bfe857dc7704ff4e"
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