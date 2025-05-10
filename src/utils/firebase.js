// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_wXI_hRRA8Dsvf9ecSTDocTOC-etuP-4",
  authDomain: "netflix-gpt-4b552.firebaseapp.com",
  projectId: "netflix-gpt-4b552",
  storageBucket: "netflix-gpt-4b552.firebasestorage.app",
  messagingSenderId: "720639784859",
  appId: "1:720639784859:web:4dc2c19f6a64a13f48133e",
  measurementId: "G-MHN03PPX51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();