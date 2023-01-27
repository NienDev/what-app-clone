// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTX4s54GpLVr_kSeZ1jHczR7DpvTG1gbM",
  authDomain: "whatsapp-clone-5400e.firebaseapp.com",
  projectId: "whatsapp-clone-5400e",
  storageBucket: "whatsapp-clone-5400e.appspot.com",
  messagingSenderId: "599279053131",
  appId: "1:599279053131:web:d4398b0ebdb748fb8920ce",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { db, auth, provider };
