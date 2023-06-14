import React from "react";
import NavbarSinTexto from "./NavbarSinTexto";
import SideBar from "./SideBar";
import Group11 from "../img/Group11.png";

function Proyectos() {
  return (
    <div>
      <NavbarSinTexto />
      <SideBar />
      <div className='flex flex-row items-center justify-center h-screen'>
        <div className='container mx-auto mt-10 ml-60'>
          <div
            className=' flex flex-row items-center justify-end  mt-20'
            style={{ width: "85vw", height: "100vh", overflow: "hidden" }}
          >
            {/* Otro contenido específico de la página */}
        {/*     <iframe
              src='https://bizkaiaok.eus/es/retos/'
              width='100%'
              height='100%'
            ></iframe> */}
              <img src={Group11} alt="Notificaciones" border="0" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
