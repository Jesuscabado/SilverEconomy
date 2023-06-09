import React, { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase';
import { uploadFile } from '../Firebase'; // Ruta correcta hacia tu archivo firebase.js

const Users = () => {
  const [rol, setRol] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImages, setUploadedImages] = useState({});

  const userCollectionRef = collection(db, 'usuarios');

  const editarUsuario = async (id, newRol) => {
    try {
      const userDoc = doc(db, 'usuarios', id);
      await updateDoc(userDoc, {
        rol: newRol,
      });
  
      setUsuarios((prevUsuarios) =>
        prevUsuarios.map((usuario) =>
          usuario.id === id ? { ...usuario, rol: newRol } : usuario
        )
      );
      setEditingUserId(null);
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

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    setSelectedFile({ ...selectedFile, [id]: file });
  };

  const handleUpload = async (id) => {
    if (selectedFile && selectedFile[id]) {
      const file = selectedFile[id];
      const imageUrl = await uploadFile(file);
      setUploadedImages((prevImages) => ({ ...prevImages, [id]: imageUrl }));
    }
  };

  const handleDelete = (id) => {
    setUploadedImages((prevImages) => {
      const updatedImages = { ...prevImages };
      delete updatedImages[id];
      return updatedImages;
    });
  };

  const enterEditMode = (id) => {
    const usuario = usuarios.find((usuario) => usuario.id === id);
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
      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{getEmailName(usuario.email)}</td>
              <td>
                {editingUserId === usuario.id ? (
                  <input
                    placeholder="Rol"
                    value={rol}
                    onChange={(event) => setRol(event.target.value)}
                    type="text"
                  />
                ) : (
                  usuario.rol
                )}
              </td>
              <td>
                {editingUserId === usuario.id ? (
                  <>
                    <label htmlFor={`file-input-${usuario.id}`}>
                      Examinar
                      <input
                        id={`file-input-${usuario.id}`}
                        type="file"
                        onChange={(e) => handleFileChange(e, usuario.id)}
                      />
                    </label>
                    {selectedFile && selectedFile[usuario.id] && (
                      <button onClick={() => handleUpload(usuario.id)}>Subir imagen</button>
                    )}
                    {uploadedImages[usuario.id] && (
                      <div>
                        <img src={uploadedImages[usuario.id]} alt="Imagen subida" />
                        <button onClick={() => handleDelete(usuario.id)}>Borrar imagen</button>
                      </div>
                    )}
                  </>
                ) : (
                  uploadedImages[usuario.id] && <img src={uploadedImages[usuario.id]} alt="Imagen subida" />
                )}
              </td>
              <td>
                {editingUserId === usuario.id ? (
                  <button onClick={() => editarUsuario(usuario.id, rol)}>Guardar</button>
                ) : (
                  <>
                    <button onClick={() => enterEditMode(usuario.id)}>Editar</button>
                    <button onClick={() => borrarUsuario(usuario.id)}>Eliminar</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
