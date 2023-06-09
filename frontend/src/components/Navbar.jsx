import React from "react";
import { Link, Route, Routes, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Acciones from "./Acciones";
import Ods from "./Ods";
import Agenda from "./Agenda";

function Navbar() {
  const { user /* , handleLogout  */ } = useAuth();

  const navbarTopStyles = {
    padding: "20px",
    textAlign: "center",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "99",
    background: "white",
  };

  const navbarBottomStyles = {
    position: "absolute",
    width: "1920px",
    height: "99px",
    left: "calc(50% - 960px)",
    top: "calc(50% - 342px)",
    background: "#black",
  };


  return (
    <>

      <nav style={navbarTopStyles} className="flex justify-between items-center">
        <div>
          {/* Aquí se encuentra tu logo o nombre del sitio */}
          <h1 className="text-2xl font-bold">Soledaptive</h1>
        </div>
        <div>
          <Routes>
            <Route path="/accionesdedesarrollo" element={<Acciones />} />
            <Route path="/ods" element={<Ods />} />
            <Route path="/agenda" element={<Agenda />} />
          </Routes>
          {/* <NavLink
            to="/accionesdedesarrollo"
            className="text-decoration-none custom-link"
            activeClassName="font-bold"
          >
            Acciones de desarrollo
          </NavLink>
          <NavLink
            to="/ods"
            className="text-decoration-none custom-link"
            activeClassName="font-bold"
          >
            O.D.S
          </NavLink>
          <NavLink
            to="/agenda"
            className="text-decoration-none custom-link"
            activeClassName="font-bold"
          >
            Agenda / Eventos
          </NavLink> */}
        </div>
        <div className="flex items-center">
          {/* Aquí se muestra el nombre de usuario y el botón de logout */}
          {user && (
            <div className="flex items-center">
              <p className="mr-4">{user.displayName || user.email}</p>
            </div>
          )}
        </div>
      </nav>

      <nav style={navbarBottomStyles} className="flex justify-between items-center">
        {/* Aquí puedes agregar contenido adicional para la sección inferior del navbar */}
      </nav>
    </>
  );
}

export default Navbar;
