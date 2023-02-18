import React from 'react'
import { useDispatch } from 'react-redux';
import { editUser } from '../redux';
import Form from './Form/Form'

function EditUserContainer({ editData, setEditData, closeModal}) {

    const dispatch = useDispatch()

    let {id, first_name, last_name, avatar, email} = editData;

    const handleEditChange = (e) => {
        setEditData({...editData, [e.target.name]: e.target.value })
    }

    const onEditHandler = (e) => {
        e.preventDefault();

        dispatch(editUser(editData))
        
        closeModal();

    };

  return (
    <Form>
        <Form.Controller>
            <label htmlFor='id'>ID</label>
            <input
            name='id'
            type='text'
            id='id'
            placeholder='Enter Id'
            value={id}
            onChange={handleEditChange}
            />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor='first_name'>First name</label>
            <input
            name='first_name'
            type='text'
            id='first_name'
            placeholder='Enter First name'
            value={first_name}
            onChange={handleEditChange}
            />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor='last_name'>Last name</label>
            <input
            name='last_name'
            type='text'
            id='last_name'
            placeholder='Enter Last name'
            value={last_name}
            onChange={handleEditChange}
            />
        </Form.Controller>

        <Form.Controller>
            <label htmlFor='avatar'>Avatar</label>
            <input
            name='avatar'
            type='text'
            id='avatar'
            placeholder='Enter source of avatar'
            value={avatar}
            onChange={handleEditChange}
            />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor='email'>Email</label>
            <input
            name='email'
            type='text'
            id='email'
            placeholder='Enter email'
            value={email}
            onChange={handleEditChange}
            />
        </Form.Controller>
    
    <div style={{ marginTop: '20px' }}>
        <button onClick={onEditHandler}>
        Edit
        </button>
        
    </div>

</Form>
  )
}

export default EditUserContainer