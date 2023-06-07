import React, { useState, useEffect } from 'react';
import firebase from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';

const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  const userCollectionRef = collection(db, 'usuarios');

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
  }, []);

  return (
    <div>
      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <h1>Email: {usuario.email}</h1>
          <h1>Rol: {usuario.rol}</h1>
        </div>
      ))}
    </div>
  );
};

export default Users;
