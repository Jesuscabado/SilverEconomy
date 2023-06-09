import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { uploadFile } from "../Firebase";
import SideBar from "./SideBar";
import "../css/Grid.css";

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
    <div className='container mx-auto'>
      <SideBar />
      <div className='w-full max-w-xs m-auto text-black'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <p className='text-xl mb-4 text-right'>
            Welcome {user.displayName || user.email}
          </p>
          <button
            className='bg-red-500 hover:bg-red-700 rounded py-2 px-4 text-white'
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
            <button className='bg-red-500 hover:bg-red-700 rounded py-2 px-4 text-white'>
              upload
            </button>
          </form>
        </div>
      </div>

      <div className='grid-container'>
        <div className='grid-item item1'>
          {/* Otro contenido específico de la página */}
          <iframe src='././indexmap.html' width='100%' height='500px' />
        </div>
        <div className='grid-item item2'>32% de gente mayor</div>
        <div className='grid-item item3'>3 de cada 4 es mujer</div>
        <div className='grid-item item4'>4% viudos</div>
        <div className='grid-item item5'>50% pobres </div>
        <div className='grid-item item6'>6 viudos</div>
      </div>
    </div>
  );
}

export default Home;