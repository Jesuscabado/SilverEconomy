// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
/* import { getAnalytics } from "firebase/analytics"; */
import { v4 } from "uuid";
/* import { getDatabase } from "firebase/database"; */

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
  measurementId: "G-GX73D1WJXW",
};

export const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
/* const database = getDatabase(app);

const analytics = getAnalytics(app);
 */
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
/**
 * upload a file to firebase storage service
 * @param {File} file  archivo que se quiere subir
 * @returns {Promise <string>}  url del archivo subido
 */

// para subir archivo a storage service cualquier tipo de archivo

export async function uploadFile(file) {
  const storageRef = ref(storage, v4()); // cambiar el nombre en funcion del ususario sino todos subiran como avatar
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
