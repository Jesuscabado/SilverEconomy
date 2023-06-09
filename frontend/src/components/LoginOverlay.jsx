import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Login from "./Login";
import "../css/LoginOverlay.css";

// Resto de importaciones necesarias

function LoginOverlay({ onClose }) {
  // Resto del código del componente Login

  return (
    <div className='overlay'>
      <div className='loginForm'>
        {/* Contenido del formulario de inicio de sesión */}
        <Login />
        {/* Resto del código */}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
export default LoginOverlay;
