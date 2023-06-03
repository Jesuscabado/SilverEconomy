import React, { useState } from "react";
import { auth, firestore } from "../firebase";

const UserEdit = ({ user }) => {
  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    email: user.email,
  }); // Crea un nuevo estado para almacenar los valores de los campos de entrada
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdateUser = async () => {
    // Actualiza el usuario seleccionado
    if (!updatedUser.name || !updatedUser.email) {
      // Valida que los campos de entrada no estén vacíos
      setMessage("Por favor ingresa todos los campos");
      return;
    }

    setLoading(true);

    try {
      // Actualiza el documento de usuario en la colección "users"
      await firestore.collection("users").doc(user.id).update(updatedUser);
      setMessage("Usuario actualizado exitosamente.");
    } catch (error) {
      console.error("Error updating user:", error);
      setMessage("Ocurrió un error al actualizar el usuario.");
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    // Actualiza el estado de updatedUser con los valores de los campos de entrada
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <input
        type="text"
        name="name"
        value={updatedUser.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        value={updatedUser.email}
        onChange={handleInputChange}
      />
      <button onClick={handleUpdateUser} disabled={loading}>
        {loading ? "Actualizando..." : "Guardar"}
      </button>
      {message && <p>{message}</p>}
    </>
  );
};

export default UserEdit;
