import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

function Proyectos() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <div className='flex flex-row items-center justify-center h-screen'>
        <div className='container mx-auto mt-10 ml-60'>
          <div
            className=' flex flex-row items-center justify-end  mt-20'
            style={{ width: "85vw", height: "100vh", overflow: "hidden" }}
          >
            {/* Otro contenido específico de la página */}
            <iframe
              src='https://bizkaiaok.eus/es/retos/'
              width='100%'
              height='100%'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
