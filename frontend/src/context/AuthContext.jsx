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

export const authContext = createContext(); // crea el contexto de autenticacion para que se pueda usar en cualquier parte de la aplicacion con el hook useContext

export const useAuth = () => {
  // hook para usar el contexto de autenticacion
  const context = useContext(authContext);
  if (!context) {
    throw new Error("There is not auth provider");
  }
  return context;
};

export function AuthContextProvider({ children }) {
  // componente para proveer el contexto de autenticacion
  const [user, setUser] = useState(null); // estado inicial del usuario null  porque no hay usuario logeado al inicio
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
    // funcion para iniciar sesion con email y contraseña  async para que espere a que se inicie sesion
    console.log("login", email, password); // Mostrar solo los datos de email y password en la consola
    await signInWithEmailAndPassword(auth, email, password); // espera a que se inicie sesion con el email y la contraseña  auth es el objeto que importamos de firebase  email y password son los datos que se pasan por parametro
  };

  const logout = () => {
    // funcion para cerrar sesion  async para que espere a que se cierre sesion
    signOut(auth); // espera a que se cierre sesion  auth es el objeto que importamos de firebase
  };

  const loginWithGoogle = async () => {
    console.log("auth", auth);
    // funcion para iniciar sesion con google
    const googleProvider = new GoogleAuthProvider(); // se crea el proveedor de google  googleProvider es el objeto que importamos de firebase
    const result = await signInWithPopup(auth, googleProvider); // se inicia sesion con el proveedor de google  auth es el objeto que importamos de firebase  googleProvider es el objeto que importamos de firebase
    console.log(result);
    return result;
  };

  const resetPassword = (email) => {
    // funcion para restablecer la contraseña
    sendPasswordResetEmail(auth, email); // se envia el email para restablecer la contraseña  auth es el objeto que importamos de firebase  email es el email que se pasa por parametro
  };

  useEffect(() => {
    //si esta logeado te devuelve el usuario
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // sino esta logeado te devuelve null
      setUser(currentUser); // almacenara el valor de currentUser
      setLoading(false); // para que no se vea el login por un segundo
    });

    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider // proveedor de contexto de autenticacion para que se pueda usar en cualquier parte de la aplicacion con el hook useContext
      value={{
        signup, // signup es la funcion para crear el usuario
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children} {/* // children es el componente que se va a renderizar */}
    </authContext.Provider>
  );
}
