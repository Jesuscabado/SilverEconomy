import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../firebase';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => { // Crea una función asíncrona llamada fetchUsers
      try {
        const usersRef = firestore.collection('users'); // Obtiene una referencia a la colección "users"
        const snapshot = await usersRef.get(); // Obtiene una instantánea de la colección "users"
        const usersData = snapshot.docs.map((doc) => ({ // Mapea los documentos de la colección "users" y crea un nuevo array con los datos de cada documento
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); // Ejecuta la función fetchUsers
  }, []);

  const handleDeleteUser = async (userId) => { // Elimina el usuario seleccionado
    setLoading(true); // Actualiza el estado de loading a true

    try {
      await firestore.collection('users').doc(userId).delete(); // Elimina el documento de usuario en la colección "users"
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId)); // Actualiza el estado de users eliminando el usuario seleccionado
      setMessage('Usuario eliminado exitosamente.'); // Actualiza el estado de message con un mensaje de éxito
    } catch (error) {
      console.error('Error deleting user:', error);
      setMessage('Ocurrió un error al eliminar el usuario.');
    }

    setLoading(false);
  };

  if (users.length === 0) {
    return (
      <div>
        <h1>Panel de Administrador</h1>
        <p>No hay usuarios disponibles.</p>
        {message && <p>{message}</p>}
      </div>
    );
  }

  return (
    <div>
      <h1>Panel de Administrador</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)} disabled={loading}>
                  {loading ? 'Eliminando...' : 'Eliminar'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserList;
