import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Alert from "./Alert";

function Register() {
  const [user, setUser] = useState({ email: "", password: "", rol: "" }); //[{},()=>{}
  const [rol, setRol] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  /*   // actualizar estado
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    setRol(value);
  };
 */
  //ver el cambio
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password, rol);
      navigate("/");
    } catch (error) {
      // para cambiar el mensaje de error de firebase por uno pesolalizado
      /* console.log(error.code);
      if(error.code === "auth/email-already-in-use"){
        setError("El correo ya esta en uso"); */
      setError(error.message);
    }
  };
  return (
    <div className='w-full max-w-xs m-auto'>
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4'
      >
        <div className='mb-4'>
          <label
            htmlFor='email-address'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='youremail@gmail.com'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email-address'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='******'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='rol'>Selecciona Rol</label>
          <select
            name='rol'
            onChange={(e) => setRol({ ...user, rol: e.target.value })}
            className='block border rounded w-full border rounded'
          >
            <option value='admin'>admin</option>
            <option value='user'>user</option>
          </select>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Register
        </button>
      </form>
      <p className='my-4 text-sm flex justify-between px-3'>
        Already have an Account?
        <Link to='/login' className='text-blue-700 hover:text-blue-900'>
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
