// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVsRLqJFiXADvmOIkvZDf4DeqxMPCrJ9s",
  authDomain: "property-portal-46225.firebaseapp.com",
  projectId: "property-portal-46225",
  storageBucket: "property-portal-46225.appspot.com",
  messagingSenderId: "1043654522139",
  appId: "1:1043654522139:web:571c5f07852cca65398fbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;