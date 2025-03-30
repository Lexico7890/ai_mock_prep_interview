// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAIsPfVt0uAaK_59ccrUEiDChF57IJpMwE",
  authDomain: "prepwiseoc.firebaseapp.com",
  projectId: "prepwiseoc",
  storageBucket: "prepwiseoc.firebasestorage.app",
  messagingSenderId: "18191297477",
  appId: "1:18191297477:web:2a00682d8c7be119b479ac",
  measurementId: "G-SCR4CM638T"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);


// const analytics = getAnalytics(app);