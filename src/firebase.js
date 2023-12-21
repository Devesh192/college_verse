// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfMf9X7tMcu4psFf6fDp-qJBHwsm6cxxo",
  authDomain: "portfolio-461fe.firebaseapp.com",
  databaseURL: "https://portfolio-461fe-default-rtdb.firebaseio.com",
  projectId: "portfolio-461fe",
  storageBucket: "portfolio-461fe.appspot.com",
  messagingSenderId: "519786339473",
  appId: "1:519786339473:web:f88a57b545b82a7f3ef330"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);
export {app, auth, db}