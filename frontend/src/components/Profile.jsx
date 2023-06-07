import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc , updateDoc,deleteDoc,doc} from 'firebase/firestore';
import { db } from '../Firebase';

const Users = () => {
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('');
  const [usuarios, setUsuarios] = useState([]);
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
   
  const editarUsuario = async (id, rol, email) => {
    const userDoc = doc(db, "usuarios", id);
    const updatedUsuario = {
      email: email,
      rol: rol,
    };
  
    try {
      await updateDoc(userDoc, updatedUsuario);
      console.log("Usuario actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };
  

    const borrarUsuario = async (id) => {

        const userDoc = doc(db, "usuarios", id);
        await deleteDoc (userDoc,{rol:"borrado"});

        };
    
  useEffect(() => {
    const getUsuarios = async () => {
      const querySnapshot = await getDocs(userCollectionRef);
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsuarios(data);
    };

    getUsuarios();
  }, [userCollectionRef]);

  return (
    <div>
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
      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <h1>Usuario: {usuario.email}</h1>
          <h1>Rol: {usuario.rol}</h1>
          <button onClick={() => editarUsuario(usuario.id, usuario.rol, usuario.email)}>Editar</button>
          <button onClick={() =>{borrarUsuario(usuario.id,usuario.email,usuario.rol)}   }>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Users;
