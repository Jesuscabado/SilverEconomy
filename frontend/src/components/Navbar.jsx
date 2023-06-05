import React from "react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, handleLogout } = useAuth();

  return (
    <nav className='flex justify-between items-center bg-gray-800 text-white p-4 w-full'>
      <div>
        {/* Aquí se encuentra tu logo o nombre del sitio */}
        <h1 className='text-2xl font-bold'>Soledaptive</h1>
      </div>
      <div className='flex items-center'>
        {/* Aquí se muestra el nombre de usuario y el botón de logout */}
        {user && (
          <div className='flex items-center'>
            <p className='mr-4'>{user.displayName || user.email}</p>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
