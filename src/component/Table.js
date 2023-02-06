import React, { Fragment } from "react";
import "../App.css";

const Table = ({  setEditData, data, setData, setShowModale }) => {


// capture the user you wish to edit, set to state
  function captureEdit(clickedID) {
    let filtered = data.find(customer => customer.id === clickedID)
    setEditData(filtered)
  }


  const deleteHandler = (e, selectedID) => {
    setData((prevState) => {
      return prevState.filter((el) => el.id !== selectedID);
    });
  };

  const users = data.map(({id, first_name, last_name, avatar, email}) => {
    return (
      <tbody>
        <tr key={id}>
          <td>{id}</td>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>
            <img src={avatar} alt="Avatar"></img>
          </td>
          <td>{email}</td>
          <td>
            <button className="btn-edit" key={id} onClick={() => { setShowModale(); captureEdit(id); }}>Edit</button>
            <button onClick={(el) => deleteHandler(el, id)}>Delete</button>
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
