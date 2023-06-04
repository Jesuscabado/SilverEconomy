import React from "react";
import UserList from "./UserList";
import UserEdit from "./UserEdit";
import CreateUser from "./CreateUser";

const AdminPanel = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>Panel de Administrador</h1>
      <UserList onEditUser={handleEditUser} />
      {selectedUser && <UserEdit user={selectedUser} />}
      <CreateUser />
    </div>
  );
};

export default AdminPanel;
