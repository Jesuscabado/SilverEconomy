// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { v4 as uuidv4 } from "uuid";
import { getDatabase } from "firebase/database";


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

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Firebase Google Auth provider

export default app;

/**
 * Upload a file to Firebase Storage service
 * @param {File} file - Archivo que se quiere subir
 * @returns {Promise<string>} - URL del archivo subido
 */
export async function uploadFile(file) {
  const storageRef = ref(storage, uuidv4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
