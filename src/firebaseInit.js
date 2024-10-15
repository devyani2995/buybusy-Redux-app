// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA__8MlwtbeANUO6ThOb_aspyrZcpGk7W8",
  authDomain: "buybusy-redux-d2b22.firebaseapp.com",
  projectId: "buybusy-redux-d2b22",
  storageBucket: "buybusy-redux-d2b22.appspot.com",
  messagingSenderId: "656285836033",
  appId: "1:656285836033:web:c0e8a6060eb833b9cdb100"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);