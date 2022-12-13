import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuAdA2zXoYZPVa36gIqa_fAWgmf2Wdp74",
  authDomain: "shortly-frontendmaster.firebaseapp.com",
  projectId: "shortly-frontendmaster",
  storageBucket: "shortly-frontendmaster.appspot.com",
  messagingSenderId: "894751491751",
  appId: "1:894751491751:web:04b2dc9b2d1e4a9e0dbd82",
  measurementId: "G-CTMT6MWD4V",
};

const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
export const auth = getAuth();
export const db = getFirestore(appFirebase);

export default appFirebase;
