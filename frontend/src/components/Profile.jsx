import NavbarSinTexto from "./NavbarSinTexto";
import SideBar from "./SideBar";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  addDoc,
  doc,
} from "firebase/firestore";
import { db, uploadFile } from "../Firebase";
import "../css/Profile.css";
import { getMetadata,uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../Firebase";

const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [selectedFile, setSelectedFile] = useState({});
  const [uploadedImages, setUploadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    sexo: "",
    rol: "",
  });

  const userCollectionRef = collection(db, "usuarios");

  const crearUsuario = async () => {
    if (isUserDataIncomplete()) {
      alert("Por favor, completa todos los campos");
      return;
    }

    try {
      const docRef = await addDoc(userCollectionRef, userData);
      setUsuarios([...usuarios, { ...userData, id: docRef.id }]);
      resetUserData();
    } catch (error) {
      console.error("Error adding usuario: ", error);
    }
  };

  /* const signup = async (email, password, rol, nombre, apellido, fechaNacimiento, sexo) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
  
      const firestore = getFirestore();
      const userDocRef = doc(firestore, 'usuarios', user.id);
  
      await setDoc(userDocRef, { email, rol, nombre, apellido, fechaNacimiento, sexo });
  

      console.log("signup", email, password, rol, nombre, apellido, fechaNacimiento, sexo);
    } catch (error) {
      console.error('Error en el registro: ', error);
    }
  }; */

  const editarUsuario = async (id) => {
    try {
      const userIndex = usuarios.findIndex((usuario) => usuario.id === id);
      if (userIndex !== -1) {
        const { email, ...updatedUserData } = userData;
        const updatedUsuarios = [...usuarios];
        updatedUsuarios[userIndex] = {
          ...updatedUsuarios[userIndex],
          ...updatedUserData,
        };
        // Actualiza la lista de usuarios en el estado
        setUsuarios(updatedUsuarios);

        // Actualiza las imágenes cargadas en el estado
        setUploadedImages((prevImages) => ({
          ...prevImages,
          [id]: prevImages[id] || null, // Si no hay cambios en la imagen, mantiene el valor anterior
        }));
        setSelectedFile((prevSelectedFile) => ({
          ...prevSelectedFile,
          [id]: prevSelectedFile[id] || null, // Si no hay cambios en la imagen, mantiene el valor anterior
        }));

        // Actualiza los datos en la base de datos
        const userDocRef = doc(db, "usuarios", id);
        await updateDoc(userDocRef, updatedUserData);
        setEditingUserId(null);
        resetUserData();
      }
    } catch (error) {
      console.error("Error al editar usuario: ", error);
    }
  };

  const borrarUsuario = async (id) => {
    try {
      const userDoc = doc(db, "usuarios", id);
      await deleteDoc(userDoc);
      setUsuarios((prevUsuarios) =>
        prevUsuarios.filter((usuario) => usuario.id !== id)
      );
    } catch (error) {
      console.error("Error deleting usuario: ", error);
    }
  };

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    setSelectedFile((prevSelectedFile) => ({
      ...prevSelectedFile,
      [id]: file,
    }));
  };

  const handleUpload = async (id) => {
    if (selectedFile && selectedFile[id]) {
      const file = selectedFile[id];
      const fileId = uuidv4();
      const avatarPath = `avatar/${id}/${fileId}_${file.name}`; // Ruta dentro de la carpeta "avatar" con el ID del usuario y el nombre del archivo
  
      try {
        const storageRef = ref(storage, avatarPath);
        await uploadBytes(storageRef, file);
  
        const imageUrl = await getDownloadURL(storageRef);
  
        // Guarda la URL de la imagen en Firestore
        const userDocRef = doc(db, "usuarios", id);
        await updateDoc(userDocRef, { avatarUrl: imageUrl });
  
        // Actualiza el estado de uploadedImages con la URL de la imagen
        setUploadedImages((prevImages) => ({
          ...prevImages,
          [id]: imageUrl,
        }));
  
        // Actualiza también la URL de la imagen en el objeto de usuario actualizado
        setUserData((prevUserData) => ({
          ...prevUserData,
          avatarUrl: imageUrl,
        }));
      } catch (error) {
        console.error("Error uploading file: ", error);
      }
    }
  };
  
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleSexoChange = (event) => {
    const { value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, sexo: value }));
  };

  const handleRolChange = (event) => {
    const { value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, rol: value }));
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
    setEditingUserId(id);
    setUserData(usuario);
  };

  const cancelEditMode = () => {
    setEditingUserId(null);
    resetUserData();
  };

  const resetUserData = () => {
    setUserData({
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      sexo: "",
      rol: "",
    });
  };

  const isUserDataIncomplete = () => {
    const { nombre, apellido, fechaNacimiento, sexo, rol } = userData;
    return !nombre || !apellido || !fechaNacimiento || !sexo || !rol;
  };

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        setIsLoading(true);
        const snapshot = await getDocs(userCollectionRef);
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
  
        // Obtén las URL de las imágenes de perfil desde Firestore
        const uploadedImages = {};
        for (const usuario of data) {
          if (usuario.avatarUrl) {
            uploadedImages[usuario.id] = usuario.avatarUrl;
          }
        }
  
        setUploadedImages(uploadedImages);
        setUsuarios(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error getting usuarios: ", error);
        setIsLoading(false);
      }
    };
  
    getUsuarios();
  }, []);
  

  return (
    <div className='fondo'>
        <NavbarSinTexto />
        <SideBar />
      <div className="perfidato">
      <h1 className='perfil'>Inicio de tu perfil</h1>
      <h2 className='datos'>Datos</h2>
      </div>
      <div className="datosarriba">
      <input
        name='nombre'
        placeholder='Nombre'
        value={userData.nombre}
        onChange={handleInputChange}
        type='text'
        className="input"
      />
      <input
        name='apellido'
        placeholder='Apellido'
        value={userData.apellido}
        onChange={handleInputChange}
        type='text'
        className="input"

      />
      <input
        name='email'
        placeholder='Email'
        value={userData.email}
        onChange={handleInputChange}
        type='text'
        disabled={editingUserId !== null}
        className="input"

      />
      <input
        name='fechaNacimiento'
        placeholder='Fecha de Nacimiento'
        value={userData.fechaNacimiento}
        onChange={handleInputChange}
        type='date'
        className="input"

      />
      <div>
        <select name='sexo' className="input" value={userData.sexo} onChange={handleSexoChange}>
          <option value=''>Sexo</option>
          <option value='hombre'>Hombre</option>
          <option value='mujer'>Mujer</option>
        </select>
      </div>
      <div>
        <select name='rol' className="input" value={userData.rol} onChange={handleRolChange}>
          <option value=''>Rol</option>
          <option value='user'>User</option>
          <option value='admin'>Admin</option>
        </select>
      </div>
      <button className="input"  onClick={crearUsuario}>Crear Usuario</button>
      </div>
      <div className='user-list'>
        {usuarios.map((usuario) => (
          <div className='user-item' key={usuario.id}>
            <div className='user-info'>
              <div className='user-avatar'>
                {editingUserId === usuario.id ? (
                  <>
                    <label htmlFor={`file-input-${usuario.id}`}>
                      <input
                        id={`file-input-${usuario.id}`}
                        type='file'
                        onChange={(e) => handleFileChange(e, usuario.id)}
                      />
                    </label>
                    {selectedFile && selectedFile[usuario.id] && (
                      <button className="botonsubir" onClick={() => handleUpload(usuario.id)}>
                        Subir
                      </button>
                    )}
                    {uploadedImages[usuario.id] && (
                      <div>
                        <img
                          src={uploadedImages[usuario.id]}
                          alt='Imagen subida'
                        />
                        <button className="botonborrar" onClick={() => handleDelete(usuario.id)}>
                          Borrar
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  uploadedImages[usuario.id] && (
                    <img src={uploadedImages[usuario.id]} alt='Imagen subida' />
                  )
                )}
              </div>
              <div className='user-details'>
                <p>Nombre: {usuario.nombre}</p>
                <p>Apellido: {usuario.apellido}</p>
                <p>Email: {usuario.email}</p>
                <p>Fecha de Nacimiento: {usuario.fechaNacimiento}</p>
                <p>Sexo: {usuario.sexo}</p>
                <p>
                  Rol:{" "}
                  {editingUserId === usuario.id ? (
                    <select
                      name='rol'
                      value={userData.rol}
                      onChange={handleRolChange}
                    >
                      <option value='user'>User</option>
                      <option value='admin'>Admin</option>
                    </select>
                  ) : (
                    usuario.rol
                  )}
                </p>
              </div>
            </div>
            <div className='user-actions'>
              {editingUserId === usuario.id ? (
                <div>
                  <button
                    disabled={isUserDataIncomplete()}
                    onClick={() => editarUsuario(usuario.id)}
                  >
                    Guardar
                  </button>
                  <button onClick={cancelEditMode}>Cancelar</button>
                </div>
              ) : (
                <div>
                  <button onClick={() => enterEditMode(usuario.id)}>
                    Editar
                  </button>
                  <button onClick={() => borrarUsuario(usuario.id)}>
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;