import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyADOqPMbmaq-VoQbgVJFMoohYpfFpKC52A",
  authDomain: "auth-development-5ea02.firebaseapp.com",
  projectId: "auth-development-5ea02",
  storageBucket: "auth-development-5ea02.appspot.com",
  messagingSenderId: "741558477775",
  appId: "1:741558477775:web:07bb706b10ddab1d09e8ba",
  // apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  // authDomain: "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
  // projectId: "process.env.",
  // storageBucket: "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET",
  // messagingSenderId: "process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
  // appId: "process.env.REACT_APP_FIREBASE_APP_ID",
});

export const auth = app.auth();
export default app;
