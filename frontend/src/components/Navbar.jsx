import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link /* , useLocation */ } from "react-router-dom";
import Logodipu from "../img/logodipu.jpg";

function Navbar({ onLoginClick }) {
  const { user /* , handleLogout  */ } = useAuth();
  /*  const location = useLocation();
  const isHome = location.pathname === "/"; */

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
    <div className='menu'>
      <div>
        {/* <Link to={isHome ? "/" : "/web"}> */}
        <img
          src={Logodipu}
          className='fixed flex justify-between items-center z-50 left-0 ml-19 scale-75 mt-[-13px]'
          alt='Logo Dipu'
        />
        {/*  </Link> */}
      </div>
      <nav className='fixed flex justify-between items-center w-full bg-white z-10 h-9'>
        <div className='flex items-center justify-start w-full'>
          {/* Aquí se encuentra tu logo o nombre del sitio */}
        </div>

        <div className='flex items-center justify-end mr-5 text-sm hidden md:block'>
          <p
            /* onClick={onLoginClick} */
            className='cursor-pointer whitespace-nowrap'
          >
            Accciones de desarrollo |
          </p>
        </div>
        <div className='flex items-center justify-end mr-5 text-sm hidden md:block'>
          <p
            /* onClick={onLoginClick} */
            className='cursor-pointer whitespace-nowrap'
          >
            <a href='https://www.ine.es/dyngs/ODS/es/index.htm' target='_blank'>
              O.D.S |
            </a>
          </p>
        </div>
        <div className='flex items-center justify-end mr-5 text-sm hidden md:block'>
          <p
            /*  onClick={onLoginClick} */
            className='cursor-pointer whitespace-nowrap'
          >
            <a href='https://www.bizkaia.eus/es/agenda' target='_blank'>
              Agenda / Eventos |
            </a>
          </p>
        </div>
        <div className='flex items-center justify-end mr-5 text-sm hidden md:block'>
          <p
            /* onClick={onLoginClick} */
            className='cursor-pointer whitespace-nowrap font-bold'
          >
            ES |
          </p>
        </div>
        <div className='flex items-center justify-end mr-5 text-sm '>
          <p
            onClick={onLoginClick}
            className='cursor-pointer whitespace-nowrap'
          >
            Iniciar sesión
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
