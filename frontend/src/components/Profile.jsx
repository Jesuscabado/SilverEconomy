
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
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    sexo: '',
    rol: ''
  });

  const userCollectionRef = collection(db, 'usuarios');

  const crearUsuario = async () => {
    if (isUserDataIncomplete()) {
      alert('Por favor, completa todos los campos');
      return;
    }

    try {
      const docRef = await addDoc(userCollectionRef, userData);
      setUsuarios([...usuarios, { ...userData, id: docRef.id }]);
      resetUserData();
    } catch (error) {
      console.error('Error adding usuario: ', error);
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
        setUsuarios(updatedUsuarios); // Actualiza la lista de usuarios en el estado
  
        const userDocRef = doc(db, 'usuarios', id);
        await updateDoc(userDocRef, updatedUserData);
        setEditingUserId(null);
        resetUserData();
      }
    } catch (error) {
      console.error('Error al editar usuario: ', error);
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
    setSelectedFile((prevSelectedFile) => ({ ...prevSelectedFile, [id]: file }));
  };

  const handleUpload = async (id) => {
    if (selectedFile && selectedFile[id]) {
      const file = selectedFile[id];
      const avatarPath = `avatar/${file.name}`; // Ruta dentro de la carpeta "avatar" con el ID del usuario y el nombre del archivo
      const imageUrl = await uploadFile(file, avatarPath); // Pasa la ruta como segundo argumento en la llamada a uploadFile
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
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      sexo: '',
      rol: ''
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

          id: doc.id

        }));
        setUsuarios(data);
        setIsLoading(false);
      } catch (error) {

        console.error('Error getting usuarios: ', error);
        setIsLoading(false);
      }
    };

    getUsuarios();
  }, []);

  return (
    <div className='container'>
      <h1 className='perfil'>Inicio de tu perfil</h1>
      <h2 className='datos'>Datos</h2>
      <input
        name="nombre"
        placeholder="Nombre"
        value={userData.nombre}
        onChange={handleInputChange}
        type="text"
      />
      <input
        name="apellido"
        placeholder="Apellido"
        value={userData.apellido}
        onChange={handleInputChange}
        type="text"
      />
      <input
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleInputChange}
        type="text"
        disabled={editingUserId !== null}
      />
      <input
        name="fechaNacimiento"
        placeholder="Fecha de Nacimiento"
        value={userData.fechaNacimiento}
        onChange={handleInputChange}
        type="date"
      />
      <div>
        <select name="sexo" value={userData.sexo} onChange={handleSexoChange}>
          <option value="">Sexo</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
      </div>
      <div>
        <select name="rol" value={userData.rol} onChange={handleRolChange}>
          <option value="">Rol</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button onClick={crearUsuario}>Crear Usuario</button>
      <div className="user-list">
        {usuarios.map((usuario) => (
         <div className="user-item" key={usuario.id}>
         <div className="user-info">
           <div className="user-avatar">
             {editingUserId === usuario.id ? (
               <>
                 <label htmlFor={`file-input-${usuario.id}`}>
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
           </div>
           <div className="user-details">
             <p>Nombre: {usuario.nombre}</p>
             <p>Apellido: {usuario.apellido}</p>
             <p>Email: {usuario.email}</p>
             <p>Fecha de Nacimiento: {usuario.fechaNacimiento}</p>
             <p>Sexo: {usuario.sexo}</p>
             <p>
               Rol: {editingUserId === usuario.id ? (
                 <select name="rol" value={userData.rol} onChange={handleRolChange}>
                   <option value="user">User</option>
                   <option value="admin">Admin</option>
                 </select>
               ) : (
                 usuario.rol
               )}
             </p>
           </div>
         </div>
         <div className="user-actions">
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
               <button onClick={() => enterEditMode(usuario.id)}>Editar</button>
               <button onClick={() => borrarUsuario(usuario.id)}>Eliminar</button>
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
