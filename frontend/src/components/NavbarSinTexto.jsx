import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Logodipu from "../img/logodipu.jpg";

function Navbar({ onLoginClick }) {
  const { user /* , handleLogout  */ } = useAuth();

  const navbarStyles = {
    padding: "20px",
    textAlign: "center",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "10",
  };

  const darkNavbarStyles = {
    ...navbarStyles,
    backgroundColor: "black",
    top: "32px",
  };

  return (
    <div>
      <div>
        <img
          src={Logodipu}
          className='fixed flex justify-between items-center z-50 left-0 ml-19 scale-75 mt-[-13px]'
          alt='Logo Dipu'
        ></img>
      </div>
      <nav className='fixed flex justify-between items-center w-full bg-white z-10 h-9'>
        <div className='flex items-center justify-start w-full'>
          {/* Aquí se encuentra tu logo o nombre del sitio */}
        </div>

        <div className='flex items-center justify-end mr-5 text-sm'>
          <p
            onClick={onLoginClick}
            className='cursor-pointer whitespace-nowrap'
          >
            {/* Accciones de desarrollo | */}
          </p>
        </div>
        <div className='flex items-center justify-end mr-5 text-sm'>
          <p
            onClick={onLoginClick}
            className='cursor-pointer whitespace-nowrap'
          >
            {/*     O.D.S | */}
          </p>
        </div>
        <div className='flex items-center justify-end mr-5 text-sm'>
          <p
            onClick={onLoginClick}
            className='cursor-pointer whitespace-nowrap'
          >
            {/* Agenda / Eventos | */}
          </p>
        </div>
        <div className='flex items-center justify-end mr-5 text-sm'>
          <p
            onClick={onLoginClick}
            className='cursor-pointer whitespace-nowrap font-bold'
          >
            {/*     ES */}
          </p>
        </div>
        <div className='flex items-center justify-end mr-5 text-sm'>
          <p
            onClick={onLoginClick}
            className='cursor-pointer whitespace-nowrap'
          >
            {/*   Iniciar sesión */}
          </p>
        </div>
      </nav>

      <nav
        style={darkNavbarStyles}
        className='flex justify-between items-center w-full bg-gray-800 text-white'
      >
        <div className='flex items-center justify-start whitespace-nowrap'>
          {/* Contenido de la sección inferior con fondo oscuro */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
