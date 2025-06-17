// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp0ZSY59x1XLCy57nSWmDwVWYBOPMvN9g",
  authDomain: "itesp-newsletter.firebaseapp.com",
  projectId: "itesp-newsletter",
  storageBucket: "itesp-newsletter.firebasestorage.app",
  messagingSenderId: "1003800463675",
  appId: "1:1003800463675:web:7e7cbfa2ec953393f44f1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };