import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const UserEdit = ({ userId }) => {
  const [user, setUser] = useState({});
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref(`usuarios/${userId}`)
          .once("value");
        const userData = snapshot.val();

        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [userId]);

  const handleEdit = async () => {
    try {
      await firebase.database().ref(`usuarios/${userId}`).update({
        email: newEmail,
        password: newPassword,
      });

      // Aquí puedes realizar alguna acción adicional después de editar el usuario

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await firebase.database().ref(`usuarios/${userId}`).remove();
      // Aquí puedes realizar alguna acción adicional después de eliminar el usuario

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>User Edit</h2>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <input
        type="text"
        placeholder="New Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleEdit}>Save</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserEdit;
