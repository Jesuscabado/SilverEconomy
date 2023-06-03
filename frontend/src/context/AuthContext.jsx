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

  const signup = (email, password, rol) => {
    createUserWithEmailAndPassword(auth, email, password, rol);
    console.log("signup", email, password, rol);
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
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
