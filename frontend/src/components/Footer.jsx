import React from "react";
import AvisoLegal from "./AvisoLegal";
import Entidades from "./Entidades";
import Accesibilidad from "./Accesibilidad";
import Mapaweb from "./MapaWeb";
import Cookies from "./Cookies";
import "../css/Footer.css";
import { Link, Route, Routes } from "react-router-dom";
import LogoBizkaia from "../img/IconosFooter/Bizkaia.png";
import Formulario from "../components/contactForm/Formulario";

const Footer = () => {
  /*   const footerStyles = {
    backgroundColor: "lightgray",
    padding: "20px",
    textAlign: "center",
    bottom: "0",
    width: "100%",
  }; */

  return (
    <footer className='FooterWeb' /*  style={footerStyles} */>
      <span className='texto1'>
        Copyright © 2023 · Bizkaiko Foru Aldundia · Diputacion Foral de Bizkai
      </span>
      <img className='claselogo' src={LogoBizkaia} alt='logo' />

      <div className='text-center'>
        <Routes>
          <Route path='/Avisolegal' component={AvisoLegal} />
        </Routes>

        <Link className='text-decoration-none custom-link' to='/avisolegal'>
          Aviso legal{" "}
        </Link>
        <Routes>
          <Route path='/Entidades' component={Entidades} />
        </Routes>

        <Link className='text-decoration-none custom-link' to='/entidades'>
          Entidades{" "}
        </Link>
        <Routes>
          <Route path='/Accesibilidad' component={Accesibilidad} />
        </Routes>

        <Link className='text-decoration-none custom-link' to='/accesibilidad'>
          Accesibilidad{" "}
        </Link>
        <Routes>
          <Route path='/Mapaweb' component={Mapaweb} />
        </Routes>

        <Link className='text-decoration-none custom-link' to='/mapaweb'>
          Mapa web{" "}
        </Link>
        <Routes>
          <Route path='/Cookies' component={Cookies} />
        </Routes>

        <Link className='text-decoration-none custom-link' to='/cookies'>
          Cookies{" "}
        </Link>
        {/* <Routes>
          <Route path='/contact' component={ContactForm} />
          <Route path='/formulario' component={Formulario} />
        </Routes> */}
        <Link className='text-decoration-none custom-link' to='/formulario'>
          Formulario de contacto
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
