import React, { Fragment, useEffect, useState } from 'react'
import '../App.css';

const Table = () => {

    const [state, setState] = useState([])

    const fetchData = () => {
        fetch("https://reqres.in/api/users?page=1")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setState(data.data)
          })
      }
    
      useEffect(() => {
        fetchData()
      }, [])


    const users = state.map(({id,first_name,last_name,avatar,email}) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>
                <img src={avatar} alt="Avatar"></img>
            </td>
            <td>{email}</td>
          </tr>
        )
      })


  return (
    <Fragment>
        <div className="App">
            <table>
                <tr>
                    <th>ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Avatar</th>
                    <th>Email</th>
                </tr>

                {users}
            </table>
        </div>
        
    </Fragment>
    
  )
}

export default Table