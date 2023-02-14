import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import Form from '../Form/Form'

const Adduser = ({ closeModal }) => {

    const {addNewUserHandller} = useContext(GlobalContext)

    
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
    
        addNewUserHandller({
          id: Math.round(Math.random() * 100),
          first_name: fname,
          last_name: lname,
          avatar,
          email,
        });

        setFName('');
        setLName('');
        setAvatar('');
        setEmail('');
        closeModal();
      };

  return (
    <Form>
        <Form.Controller>
            <label htmlFor='fname'>First name</label>
            <input
            type='text'
            id='fname'
            placeholder='Enter First name'
            value={fname}
            onChange={(e) => setFName(e.target.value)}
            />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor='lname'>Last name</label>
            <input
            type='text'
            id='lname'
            placeholder='Enter Last name'
            value={lname}
            onChange={(e) => setLName(e.target.value)}
            />
        </Form.Controller>

        <Form.Controller>
            <label htmlFor='avatar'>Avatar</label>
            <input
            type='text'
            id='avatar'
            placeholder='Enter source of avatar'
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor='email'>Email</label>
            <input
            type='text'
            id='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </Form.Controller>
        
        <div style={{ marginTop: '20px' }}>
            <button onClick={onSubmitHandler}>
            Save
            </button>

        </div>

    </Form>
      

  )
}

export default Adduser