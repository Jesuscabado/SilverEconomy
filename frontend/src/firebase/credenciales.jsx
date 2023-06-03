// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Y5zIx7lDBUUFTqGZM0ySwvUrMJztiJc",
  authDomain: "silvereconomy-7895a.firebaseapp.com",
  projectId: "silvereconomy-7895a",
  storageBucket: "silvereconomy-7895a.appspot.com",
  messagingSenderId: "26118163184",
  appId: "1:26118163184:web:2d4b36a64836fe96a59035",
  measurementId: "G-JWT0446TK8",
};

export const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
getToken(messaging, {
  vapidKey:
    "BBgpegZNphxe4BqegdlddN_43lYldrDxGlnFhVv9mejIYV8w0BLp-Y7CmG4gPwFQtmrJj-0VhXh4t12pUF60T_8",
});

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
