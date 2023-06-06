import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Alert from "./Alert";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    rol: "",
    photoURL: null
  });
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try { 
      await signup(user.email, user.password, user.rol);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser((prevUser) => ({
          ...prevUser,
          photoURL: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@gmail.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) =>
              setUser((prevUser) => ({
                ...prevUser,
                email: e.target.value
              }))
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) =>
              setUser((prevUser) => ({
                ...prevUser,
                password: e.target.value
              }))
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rol">Selecciona Rol</label>
          <select
            name="rol"
            onChange={(e) =>
              setUser((prevUser) => ({
                ...prevUser,
                rol: e.target.value
              }))
            }
            className="block border rounded w-full border rounded"
          >
            <option value="">Selecciona una opción</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">
            Foto de Perfil
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept="image/*"
            className="block"
            onChange={handleFileChange}
          />
        </div>
        {user.photoURL && (
          <div className="mb-4">
            <img src={user.photoURL} alt="Profile" className="rounded-full h-20 w-20 mx-auto" />
          </div>
        )}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Already have an Account?
        <Link to="/login" className="text-blue-700 hover:text-blue-900">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
