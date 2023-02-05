import React, { Fragment } from 'react'
import '../App.css';

const Table = ({names}) => {

    const users = names.map(({id,first_name,last_name,avatar,email}) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{avatar}</td>
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