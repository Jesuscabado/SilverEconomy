import NavbarSinTexto from "./NavbarSinTexto";
import SideBar from "./SideBar";
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
      const { email, ...updatedUserData } = userData;
      await updateDoc(doc(userCollectionRef, id), updatedUserData);
      setEditingUserId(null);
      resetUserData();
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
      const imageUrl = await uploadFile(file);
      setUploadedImages((prevImages) => ({ ...prevImages, [id]: imageUrl }));
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
    <div className='userscontainer'>
      <NavbarSinTexto />
      <SideBar />
      <h1 className='usersperfil'>Inicio de tu perfil</h1>
      <h2 className='usersdatos'>Datos</h2>
      <input
        className='usersinput'
        name='nombre'
        placeholder='Nombre'
        value={userData.nombre}
        onChange={handleInputChange}
        type='text'
      />
      <input
        className='usersinput'
        name='apellido'
        placeholder='Apellido'
        value={userData.apellido}
        onChange={handleInputChange}
        type='text'
      />
      <input
        className='usersinput'
        name='email'
        placeholder='Email'
        value={userData.email}
        onChange={handleInputChange}
        type='text'
        disabled={editingUserId !== null}
      />
      <input
        className='usersinput'
        name='fechaNacimiento'
        placeholder='Fecha de Nacimiento'
        value={userData.fechaNacimiento}
        onChange={handleInputChange}
        type='date'
      />
      <div>
        <select
          className='userselect'
          name='sexo'
          value={userData.sexo}
          onChange={handleSexoChange}
        >
          <option value=''>Sexo</option>
          <option value='hombre'>Hombre</option>
          <option value='mujer'>Mujer</option>
        </select>
      </div>
      <div>
        <select
          className='userselect'
          name='rol'
          value={userData.rol}
          onChange={handleRolChange}
        >
          <option value=''>Rol</option>
          <option value='user'>User</option>
          <option value='admin'>Admin</option>
        </select>
      </div>
      <button onClick={crearUsuario}>Crear Usuario</button>
      <div className='usersuser-list'>
        {usuarios.map((usuario) => (
          <div className='usersuser-item' key={usuario.id}>
            <p>Nombre: {usuario.nombre}</p>
            <p>Apellido: {usuario.apellido}</p>
            <p>Email: {usuario.email}</p>
            <p>Fecha de Nacimiento: {usuario.fechaNacimiento}</p>
            <p>Sexo: {usuario.sexo}</p>
            <p>
              Rol:{" "}
              {editingUserId === usuario.id ? (
                <select
                  className='userselect'
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
            <div>
              {editingUserId === usuario.id ? (
                <>
                  <label htmlFor={`file-input-${usuario.id}`}>
                    <input
                      className='usersinput'
                      id={`file-input-${usuario.id}`}
                      type='file'
                      onChange={(e) => handleFileChange(e, usuario.id)}
                    />
                  </label>
                  {selectedFile && selectedFile[usuario.id] && (
                    <button
                      className='userbutton'
                      onClick={() => handleUpload(usuario.id)}
                    >
                      Subir imagen
                    </button>
                  )}
                  {uploadedImages[usuario.id] && (
                    <div>
                      <img
                        className='userimg'
                        src={uploadedImages[usuario.id]}
                        alt='Imagen subida'
                      />
                      <button
                        className='userbutton'
                        onClick={() => handleDelete(usuario.id)}
                      >
                        Borrar imagen
                      </button>
                    </div>
                  )}
                </>
              ) : (
                uploadedImages[usuario.id] && (
                  <img
                    className='userimg'
                    src={uploadedImages[usuario.id]}
                    alt='Imagen subida'
                  />
                )
              )}
            </div>
            <div>
              {editingUserId === usuario.id ? (
                <div>
                  <button
                    className='userbutton'
                    disabled={isUserDataIncomplete()}
                    onClick={() => editarUsuario(usuario.id)}
                  >
                    Guardar
                  </button>
                  <button className='userbutton' onClick={cancelEditMode}>
                    Cancelar
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className='userbutton'
                    onClick={() => enterEditMode(usuario.id)}
                  >
                    Editar
                  </button>
                  <button
                    className='userbutton'
                    onClick={() => borrarUsuario(usuario.id)}
                  >
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
