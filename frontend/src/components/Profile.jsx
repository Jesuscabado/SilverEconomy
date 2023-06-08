import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase';

const Users = () => {
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);

  const userCollectionRef = collection(db, 'usuarios');

  const crearUsuario = async () => {
    const newUsuario = {
      email: email,
      rol: rol,
    };

    try {
      const docRef = await addDoc(userCollectionRef, newUsuario);
      setUsuarios([...usuarios, { ...newUsuario, id: docRef.id }]);
      setEmail('');
      setRol('');
    } catch (error) {
      console.error('Error adding usuario: ', error);
    }
  };

  const editarUsuario = async (id, newRol, newEmail) => {
    try {
      const userDoc = doc(db, 'usuarios', id);
      await updateDoc(userDoc, {
        email: newEmail,
        rol: newRol,
      });

      setUsuarios((prevUsuarios) =>
        prevUsuarios.map((usuario) =>
          usuario.id === id ? { ...usuario, rol: newRol, email: newEmail } : usuario
        )
      );
      setEditingUserId(null);
      setEmail('');
      setRol('');
    } catch (error) {
      console.error('Error updating usuario: ', error);
    }
  };

  const borrarUsuario = async (id) => {
    try {
      const userDoc = doc(db, 'usuarios', id);
      await deleteDoc(userDoc);

      setUsuarios((prevUsuarios) => prevUsuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error('Error deleting usuario: ', error);
    }
  };

  const enterEditMode = (id) => {
    const usuario = usuarios.find((usuario) => usuario.id === id);
    setEmail(usuario.email);
    setRol(usuario.rol);
    setEditingUserId(id);
  };

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const querySnapshot = await getDocs(userCollectionRef);
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUsuarios(data);
      } catch (error) {
        console.error('Error getting usuarios: ', error);
      }
    };

    getUsuarios();
  }, [userCollectionRef]);

  const getEmailName = (email) => {
    const atIndex = email.indexOf('@');
    return email.substring(0, atIndex);
  };

  return (
    <div>
      {editingUserId === null && (
        <>
          <input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <input
            placeholder="Rol"
            value={rol}
            onChange={(event) => setRol(event.target.value)}
            type="text"
          />
          <button onClick={crearUsuario}>Crear Usuario</button>
        </>
      )}

      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          {editingUserId === usuario.id ? (
            <>
              <input
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
              />
              <input
                placeholder="Rol"
                value={rol}
                onChange={(event) => setRol(event.target.value)}
                type="text"
              />
              <button onClick={() => editarUsuario(usuario.id, rol, email)}>Guardar</button>
            </>
          ) : (
            <>
              <h1>Usuario: {getEmailName(usuario.email)}</h1>
              <h1>Rol: {usuario.rol}</h1>
              <button onClick={() => enterEditMode(usuario.id)}>Editar</button>
              <button onClick={() => borrarUsuario(usuario.id)}>Eliminar</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;
