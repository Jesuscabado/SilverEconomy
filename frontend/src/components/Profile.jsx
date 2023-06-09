import React, { useState, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, auth, storage } from "../Firebase";
import { uploadFile } from "../Firebase";

const Users = () => {
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [file, setFile] = useState(null);

  const userCollectionRef = collection(db, "usuarios");

  const firebaseAuth = getAuth();

  const crearUsuario = async () => {
    const newUsuario = {
      email: email,
      rol: rol,
      photoURL: photoURL,
    };

    try {
      const docRef = await addDoc(userCollectionRef, newUsuario);
      setUsuarios([...usuarios, { ...newUsuario, id: docRef.id }]);
      setEmail("");
      setRol("");
      setPhoto(null);
      setPhotoURL("");
    } catch (error) {
      console.error("Error adding usuario: ", error);
    }
  };

  const editarUsuario = async (id, newRol, newEmail) => {
    try {
      const userDoc = doc(db, "usuarios", id);
      await updateDoc(userDoc, {
        email: newEmail,
        rol: newRol,
        photoURL: photoURL,
      });

      // Actualizar detalles del usuario en la autenticación
      const user = firebaseAuth.currentUser;
      await updateProfile(user, {
        displayName: newEmail,
        photoURL: photoURL,
      });

      setUsuarios((prevUsuarios) =>
        prevUsuarios.map((usuario) =>
          usuario.id === id
            ? { ...usuario, rol: newRol, email: newEmail, photoURL: photoURL }
            : usuario
        )
      );
      setEditingUserId(null);
      setEmail("");
      setRol("");
      setPhoto(null);
      setPhotoURL("");
    } catch (error) {
      console.error("Error updating usuario: ", error);
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

  const enterEditMode = (id) => {
    const usuario = usuarios.find((usuario) => usuario.id === id);
    setEmail(usuario.email);
    setRol(usuario.rol);
    setPhotoURL(usuario.photoURL);
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
        console.error("Error getting usuarios: ", error);
      }
    };

    getUsuarios();
  }, [userCollectionRef]);

  const getEmailName = (email) => {
    const atIndex = email.indexOf("@");
    return email.substring(0, atIndex);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRolChange = (event) => {
    setRol(event.target.value);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await uploadFile(file);
      console.log(result); // tiene la url del archivo
    } catch (error) {
      console.log(error);
      alert("Hubo un error al subir el archivo");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (editingUserId === null) {
      await crearUsuario();
    } else {
      await uploadPhoto();
      editarUsuario(editingUserId, rol, email);
    }
  };

  const uploadPhoto = async () => {
    if (photo) {
      try {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(photo.name);
        await fileRef.put(photo);
        const url = await fileRef.getDownloadURL();
        setPhotoURL(url);
      } catch (error) {
        console.error("Error uploading photo: ", error);
      }
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={HandleSubmit}>
          <input
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
            type='text'
          />
          <input
            placeholder='Rol'
            value={rol}
            onChange={handleRolChange}
            type='text'
          />
          <input
            type='file'
            name='file'
            id='file'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button className='bg-red-500 hover:bg-red-700 rounded py-2 px-4 text-white'>
            upload
          </button>
        </form>
        {/*         {<input type='file' accept='image/*' onChange={handlePhotoChange} />}
         */}
        <button type='submit'>
          {editingUserId === null ? "Crear Usuario" : "Guardar"}
        </button>
      </div>

      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          {editingUserId === usuario.id ? (
            <form onSubmit={HandleSubmit}>
              <input
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
                type='text'
              />
              <input
                placeholder='Rol'
                value={rol}
                onChange={handleRolChange}
                type='text'
              />
              <input
                type='file'
                accept='image/*'
                onChange={handlePhotoChange}
              />
              <button type='submit'>Guardar</button>
            </form>
          ) : (
            <>
              <h1>Usuario: {getEmailName(usuario.email)}</h1>
              <h1>Rol: {usuario.rol}</h1>
              {usuario.photoURL && <img src={usuario.photoURL} alt='Profile' />}
              <button onClick={() => enterEditMode(usuario.id)}>Editar</button>
              <button onClick={() => borrarUsuario(usuario.id)}>
                Eliminar
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;
