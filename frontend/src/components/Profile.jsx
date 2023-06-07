import React, { useState, useEffect } from 'react';
import firebase from '../Firebase';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('');
  const [editUserId, setEditUserId] = useState('');

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const snapshot = await firebase.firestore().collection('usuarios').get();
      const usuariosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsuarios(usuariosData);
    } catch (error) {
      console.log('Error fetching usuarios:', error);
    }
  };

  const agregarUsuario = async () => {
    if (!email || !rol) return;

    try {
      const nuevoUsuario = { email, rol };
      await firebase.firestore().collection('usuarios').add(nuevoUsuario);
      setEmail('');
      setRol('');
      fetchUsuarios();
    } catch (error) {
      console.log('Error adding usuario:', error);
    }
  };

  const eliminarUsuario = async (usuarioId) => {
    try {
      await firebase.firestore().collection('usuarios').doc(usuarioId).delete();
      fetchUsuarios();
    } catch (error) {
      console.log('Error deleting usuario:', error);
    }
  };

  const editarUsuario = (usuarioId) => {
    setEditUserId(usuarioId);
    const usuario = usuarios.find(usuario => usuario.id === usuarioId);
    if (usuario) {
      setEmail(usuario.email);
      setRol(usuario.rol);
    }
  };
  
  const actualizarUsuario = async () => {
    if (!email || !rol || !editUserId) return;
  
    try {
      const usuarioActualizado = { email, rol };
      await firebase.firestore().collection('usuarios').doc(editUserId).update(usuarioActualizado);
      setEmail('');
      setRol('');
      setEditUserId('');
      fetchUsuarios();
    } catch (error) {
      console.log('Error updating usuario:', error);
    }
  };
  
  const cancelarEdicion = () => {
    setEmail('');
    setRol('');
    setEditUserId('');
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rol"
        value={rol}
        onChange={(e) => setRol(e.target.value)}
      />
      <button onClick={agregarUsuario}>Agregar</button>

      <button onClick={eliminarUsuario}>Eliminar</button>

      {editUserId ? (
        <>
          <button onClick={actualizarUsuario}>Guardar</button>
          <button onClick={cancelarEdicion}>Cancelar</button>
        </>
      ) : (
        <button onClick={editarUsuario}>Editar</button>
      )}

      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.email}</td>
              <td>{usuario.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
