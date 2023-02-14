import React, { Fragment, useContext } from "react";
import "../App.css";
import { GlobalContext } from "../context/GlobalState";

const Table = ({  setEditData, setShowModale }) => {

  const {data, deleteHandler} = useContext(GlobalContext)

// capture the user you wish to edit, set to state
  function captureEdit(clickedID) {
    let filtered = data.find(user => user.id === clickedID)
    setEditData(filtered)
  }
  const users = data.map(({id, first_name, last_name, avatar, email}) => {
    return (
      <tbody key={id}>
        <tr>
          <td>{id}</td>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>
            <img src={avatar} alt="Avatar"></img>
          </td>
          <td>{email}</td>
          <td>
            <button className="btn-edit" onClick={() => { setShowModale(); captureEdit(id); }}>Edit</button>
            <button onClick={() => deleteHandler(id)}>Delete</button>
          </td>
        </tr>
      </tbody>
      
    );
  });

  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Avatar</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        {users}
      </table>
    </Fragment>
  );
};

export default Table;
