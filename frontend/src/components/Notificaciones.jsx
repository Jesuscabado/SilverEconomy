import React from "react";
import NavbarSinTexto from "./NavbarSinTexto";
import SideBar from "./SideBar";
import Group10 from "../img/Group10.png";
import "../css/Notificaciones.css";

function Notificaciones() {
  return (
    <div>
      <NavbarSinTexto />
      <SideBar />
      <img className="imagen" src={Group10} alt="Notificaciones" border="0" />
    </div>
  );
}

export default Notificaciones;
