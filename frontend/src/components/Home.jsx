import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useAuth } from "../context/AuthContext";
import { uploadFile } from "../Firebase";


function Home() {
  const { user, logout, loading } = useAuth();
  const [file, setFile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Obtener la lista de usuarios de la base de datos
    const getUsers = async () => {
      try {
        const snapshot = await firebase.database().ref("usuarios").once("value");
        const data = snapshot.val();
        if (data) {
          const userList = Object.entries(data).map(([id, userData]) => ({
            id,
            ...userData,
          }));
          setUsers(userList);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditUser = async () => {
    try {
      if (user && user.userId) {
        await firebase.database().ref(`usuarios/${user.userId}`).update({
          email: newEmail,
          password: newPassword,
        });

        // Aquí puedes realizar alguna acción adicional después de editar el usuario

        // Reinicia los valores de email y password
        setNewEmail("");
        setNewPassword("");
        setEditing(false); // Desactiva el modo de edición
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await firebase.database().ref(`usuarios/${userId}`).remove();
      // Aquí puedes realizar alguna acción adicional después de eliminar el usuario
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await uploadFile(file);
      console.log(result); // tiene la URL del archivo
    } catch (error) {
      console.log(error);
      alert("Hubo un error al subir el archivo");
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-xl mb-4">Welcome {user.displayName || user.email}</p>
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
          onClick={handleLogout}
        >
          Logout
        </button>
        {editing ? (
          <div>
            <input
              type="text"
              placeholder="New Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleEditUser}>Save</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </div>
        ) : (
          <div>
            <button onClick={() => setEditing(true)}>Edit</button>
            {users.map((user) => (
              <div key={user.id}>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </div>
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button>Upload</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
