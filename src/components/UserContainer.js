import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, fetchUsers } from '../redux'
import '../App.css'

function UserContainer({ setEditData, setShowModal}) {

    const userData = useSelector((state) => state.userData.users);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    // capture the user you wish to edit, set to state
  function captureEdit(clickedID) {
    let filtered = userData.find(customer => customer.id === clickedID)
    setEditData(filtered)
  }

    const table = userData.map(({id, first_name, last_name, avatar, email}) => {
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
                <button className="btn-edit" onClick={() => { setShowModal(); captureEdit(id)}}>Edit</button>
                <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
              </td>
            </tr>
          </tbody>
          
        );
      });

    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
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

                {table}
        </table>

        </div>
    )
}

export default UserContainer