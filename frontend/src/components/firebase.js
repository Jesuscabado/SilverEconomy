// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Y5zIx7lDBUUFTqGZM0ySwvUrMJztiJc",
  authDomain: "silvereconomy-7895a.firebaseapp.com",
  projectId: "silvereconomy-7895a",
  storageBucket: "silvereconomy-7895a.appspot.com",
  messagingSenderId: "26118163184",
  appId: "1:26118163184:web:2d4b36a64836fe96a59035",
  measurementId: "G-JWT0446TK8",
};
export const provider = new GoogleAuthProvider(); // Initialize Firebase
const app = initializeApp(firebaseConfig); // Initialize Firebase Authentication and get a reference to the service
const messaging = getMessaging(app); // TODO: Add SDKs for Firebase products that you want to use
export const auth = getAuth(app);
export default app;
