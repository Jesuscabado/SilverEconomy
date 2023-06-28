import React from "react";
import NavbarSinTexto from "./NavbarSinTexto";
import SideBar from "./SideBar";
import Group12 from "../img/Group12.png";


function PlanAccion() {
  return (
    <div>
      <NavbarSinTexto />
      <SideBar />
      <img className="accion" src={Group12} alt="Notificaciones" border="0" />
    </div>
  );
}

export default PlanAccion;
