import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Register from "./Register";
import "../css/RegisterOverlay.css";

// Resto de importaciones necesarias

function LoginOverlay({ onClose }) {
  // Resto del código del componente Login

  return (
    <div className='registeroverlay'>
      <div className='registerForm'>
        {/* Contenido del formulario de inicio de sesión */}
        <Register />
        {/* Resto del código */}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
export default LoginOverlay;
