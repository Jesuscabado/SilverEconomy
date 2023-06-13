import React from "react";
import { useState } from "react";
import Register from "./Register";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Alert from "./Alert";
import RegisterOverlay from "./RegisterOverlay";

function Login() {
  const [user, setUser] = useState({ email: "", password: "", rol: "" }); // estado inicial del usuario
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [registered, setRegistered] = useState(false);

  // actualizar estado
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value }); // ...user copia el estado anterior y [name]: value actualiza el estado
  };

  //ver el cambio
  const handleSubmit = async (e) => {
    //  e es el evento
    e.preventDefault(); // evita que se recargue la pagina
    setError("");
    try {
      await login(user.email, user.password); // espera a que se ejecute la funcion login
      navigate("/home"); // redirecciona a la pagina home page
    } catch (error) {
      console.log(error);
      // para cambiar el mensaje de error de firebase por uno pesolalizado
      // console.log(error.code);
      //  if(error.code === "auth/email-already-in-use"){
      setError("El correo ya esta en uso");
      setError(
        error.message
          .replace("Firebase: Error ", "")
          .split("/")[1]
          .replace(/[).]+$/, "")
      );
    }
  };

  const handleGoogleSignin = async () => {
    // funcion para iniciar sesion con google
    try {
      await loginWithGoogle(); // espera a que se ejecute la funcion loginWithGoogle
      navigate("/home"); // redirecciona a la pagina home page
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    // funcion para resetear la contraseña
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password"); // si no hay un correo escrito
    try {
      await resetPassword(user.email); // espera a que se ejecute la funcion resetPassword
      setError("We sent you an email. Check your inbox");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
    setShowRegister(!showRegister);
    setRegistered(true);
  };

  return (
    <div className='w-full max-w-xs m-auto'>
      {error && <Alert message={error} />}
      {!registered && showLogin ? (
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <span className='flex justify-center items-center font-bold'>
            Iniciar sesión
          </span>
          <div className='mb-4'>
            <label
              htmlFor='email-address'
              className='block text-gray-700 text-sm font-bold mb-2'
            ></label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='youremail@gmail.com'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email-address'
              className='block text-gray-700 text-sm font-bold mb-2'
            ></label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='******'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={handleChange}
            />
          </div>
          <div>
            <p className='inline-block align-baseline text-xs '>
              ¿Has olvidado tu contraseña? Pincha
              <a
                className='font-bold text-xs text-red-500 hover:text-red-800 ml-1'
                href='#!'
                onClick={handleResetPassword}
              >
                Aquí
              </a>
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className=' mt-4 mb-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
              type='submit'
            >
              Inicio de sesión
            </button>
          </div>

          <button
            onClick={handleGoogleSignin}
            className='flex items-center justify-between bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full'
          >
            Inicia sesión con Google
          </button>

          <p className='my-4 text-xs flex justify-center items-center'>
            ¿No tienes una cuenta?
          </p>
          <div className='flex items-center justify-between '>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
              onClick={handleToggleForm}
            >
              Regístrate
            </button>
          </div>
        </form>
      ) : (
        <div>
          <Register onClose={handleToggleForm} onRegister={handleRegister} />
          {showRegister && <RegisterOverlay onClose={handleToggleForm} />}
        </div>
      )}
    </div>
  );
}

export default Login;
