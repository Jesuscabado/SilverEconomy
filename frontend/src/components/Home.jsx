import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { uploadFile } from "../Firebase";

function Home() {
  const { user, logout, loading } = useAuth();
  const [file, setFile] = useState(null);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1>Loading...</h1>;

  // funcion de subir archivo porque que sube y da la url

  const HandleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await uploadFile(file);
      console.log(result); // tiene la url del archivo
    } catch (error) {
      console.log(error);
      alert("Hubo un error al subir el archivo");
    }
  };

  return (
    <div className='w-full max-w-xs m-auto text-black'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <p className='text-xl mb-4'>Welcome {user.displayName || user.email}</p>
        <button
          className='bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black'
          onClick={handleLogout}
        >
          logout
        </button>
        {/*  //fomulario de subir archivo */}
        <form onSubmit={HandleSubmit}>
          <input
            type='file'
            name='file'
            id='file'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button>upload</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
