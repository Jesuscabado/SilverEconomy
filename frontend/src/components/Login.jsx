import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Alert from "./Alert";

function Login() {
  const [user, setUser] = useState({ email: "", password: "", rol: "" }); //[{},()=>{}

  const [error, setError] = useState("");

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  // actualizar estado
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  //ver el cambio
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error);
      // para cambiar el mensaje de error de firebase por uno pesolalizado
      /* console.log(error.code);
      if(error.code === "auth/email-already-in-use"){
        setError("El correo ya esta en uso"); */
      setError(
        error.message
          .replace("Firebase: Error ", "")
          .split("/")[1]
          .replace(/[).]+$/, "")
      );
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError("We sent you an email. Check your inbox");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <span className="flex justify-center items-center font-bold">
          Iniciar sesión
        </span>
        <div className="mb-4">
          <label
            htmlFor="email-address"
            className="block text-gray-700 text-sm font-bold mb-2"
          ></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@gmail.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email-address"
            className="block text-gray-700 text-sm font-bold mb-2"
          ></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        <div>
          <p className="inline-block align-baseline text-xs ">
            ¿Has olvidado tu contraseña? Pincha
          </p>

          <a
            className="inline-block align-baseline font-bold text-xs text-red-500 hover:text-red-800 m-4"
            href="#!"
            onClick={handleResetPassword}
          >
            aqui
          </a>
        </div>
        <div className=" m-4 flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Inicio de sesión
          </button>
        </div>

        <button
          onClick={handleGoogleSignin}
          className="m-4 flex items-center justify-between bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
        >
          Inicia sesión con Google
        </button>

        <p className="my-4 text-xs flex justify-center items-center">
          ¿No tienes una cuenta?
        </p>
        <div className="flex items-center justify-between ">
          <button className="m-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            <Link to="/register">Register</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
