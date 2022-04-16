// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHcrG5XRDGe6fiqgMT-l23dg7dILSe7SM",
  authDomain: "wild-photographer-9a405.firebaseapp.com",
  projectId: "wild-photographer-9a405",
  storageBucket: "wild-photographer-9a405.appspot.com",
  messagingSenderId: "190775910183",
  appId: "1:190775910183:web:5685b96a2e19e2f53ed302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth