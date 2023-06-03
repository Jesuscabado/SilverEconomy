import React, { useState } from 'react';
import { auth, firestore } from '../firebase';

const CreateUser = () => {
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });

  const handleCreateUser = async () => {
    try {
      const { email, password } = newUser;
      // Crea un nuevo usuario utilizando el objeto auth de Firebase
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);

      // Obtén el ID del nuevo usuario creado
      const userId = userCredential.user.uid;

      // Crea un nuevo documento de usuario en la colección "users" utilizando el ID del usuario
      await firestore.collection('users').doc(userId).set({
        name: newUser.name,
        email: newUser.email,
      });

      console.log('User created successfully.');
      setNewUser({ name: '', email: '', password: '' });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={newUser.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={newUser.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={newUser.password}
        onChange={handleInputChange}
      />
      <button onClick={handleCreateUser}>Crear Usuario</button>
    </>
  );
};

export default CreateUser;
