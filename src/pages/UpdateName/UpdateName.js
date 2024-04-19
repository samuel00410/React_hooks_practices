// ./src/components/UpdateName.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "../../redux/nameSlice";

const UpdateName = () => {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();

  const handleChangeName = () => {
    dispatch(updateName(newName));
  };

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleChangeName}>Update Name</button>
    </div>
  );
};

export default UpdateName;
