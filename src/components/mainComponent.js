import React, { useEffect,useState } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { getUsers, userState, addUser, deleteUser, editUser } = props;
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = ({ name, email }) => {
    if (editMode && currentUser) {
      editUser(currentUser.id, { name, email });
    } else {
      addUser({ name, email });
    }
    setEditMode(false);
    setCurrentUser(null);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div id="main-container-wrapper">
      <InputHandler onSubmit={handleSubmit} editMode={editMode} currentUser={currentUser} />
      <SimpleTable 
        dataSource={userState.users} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
    </div>
  );
}

export default MainComponent;


