import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../Firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("There is not auth provider");
  }
  return context;
};

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // para que no se vea el login por un segundo

  const signup = async (email, password, rol) => {
    //  async para que espere a que se cree el usuario
    try {
      // try catch para manejar el error
      const { user } = await createUserWithEmailAndPassword(
        // destructuring para obtener el usuario
        auth, // auth es el objeto que importamos de firebase
        email, // email del usuario
        password, // password del usuario
        rol // rol del usuario
      );
      const firestore = getFirestore(); // firestore para crear el documento del usuario para almacenar el rol y el email  del usuario
      const userDocRef = doc(firestore, "usuarios", user.uid); // referencia para crear el documento del usuario del rol y el email del usuario
      await setDoc(userDocRef, { email, rol }); // setDoc para crear el documento del usuario del rol y el email del usuario dentor del rol se meto todo otra vez en un objeto
      console.log("signup", email, password, rol); // Mostrar solo los datos de email, password y rol en la consola
    } catch (error) {
      // Manejo del error
    }
  };

  //version funciona con firebase
  /* const signup = (email, password, rol) => {
    createUserWithEmailAndPassword(auth, email, password, rol);
    console.log("signup", email, password, rol);
  };
 */
  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("login", email, password);
  };

  const logout = () => {
    signOut(auth);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    //si esta logeado te devuelve el usuario
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // sino esta logeado te devuelve null
      setUser(currentUser); // almacenara el valor de currentUser
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}