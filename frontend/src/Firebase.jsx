import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { v4 } from "uuid";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Y5zIx7lDBUUFTqGZM0ySwvUrMJztiJc",
  authDomain: "silvereconomy-7895a.firebaseapp.com",
  projectId: "silvereconomy-7895a",
  storageBucket: "silvereconomy-7895a.appspot.com",
  messagingSenderId: "26118163184",
  appId: "1:26118163184:web:2d4b36a64836fe96a59035",
  measurementId: "G-GX73D1WJXW",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;

/**
 * Upload a file to Firebase Storage service
 * @param {File} file - archivo que se quiere subir
 * @returns {Promise<string>} - url del archivo subido
 */
export async function uploadFile(file) {
  const storageRef = ref(storage, v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
