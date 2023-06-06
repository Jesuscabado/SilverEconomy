import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const snapshot = await firebase.database().ref("usuarios").once("value");
        const usersData = snapshot.val();
        if (usersData) {
          const usersArray = Object.keys(usersData).map((userId) => ({
            id: userId,
            ...usersData[userId],
          }));
          setUsers(usersArray);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await firebase.database().ref(`usuarios/${userId}`).remove();
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
