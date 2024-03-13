// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW0dzbUkv1AE5ryXs55x54xtX6yMTaCd8",
  authDomain: "elstudio-808d8.firebaseapp.com",
  projectId: "elstudio-808d8",
  storageBucket: "elstudio-808d8.appspot.com",
  messagingSenderId: "886620549368",
  appId: "1:886620549368:web:20d225112c0912256f8b0d",
  measurementId: "G-CV8HFZK8D8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
