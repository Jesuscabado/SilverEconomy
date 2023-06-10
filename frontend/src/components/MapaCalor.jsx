import React from "react";
import "../css/MapaCalor.css";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

function MapaCalor() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <div className='flex flex-row items-center justify-center h-screen'>
        <h3 className='titulomapa text-3xl font-bold mb-4'>Mapa de Calor</h3>
        <div className='container mx-auto'>
          <div
            className='card-11 flex flex-row items-center justify-center ml-4'
            style={{ width: "800px", height: "450px" }}
          >
            {" "}
            {/* Otro contenido específico de la página */}
            <iframe
              className='rounded-lg w-full h-full'
              src='././indexmap.html'
              width='700px'
              height='500px'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapaCalor;
