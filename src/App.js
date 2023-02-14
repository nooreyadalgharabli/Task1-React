import { useState } from 'react';
import Table from './component/Table';
import Modal from './component/Modal/Modal';
import Adduser from './component/Adduser/Adduser';
import EditUserData from './component/EditUserData/EditUserData';
import './App.css';

import { GlobalProvider } from './context/GlobalState';


function App() {

  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(true);
  const [editData, setEditData] = useState([{
    id: "",
    first_name: "",
    last_name: "",
    avatar: "",
    email: "",
  }]);  

  const onclickAdd = () => {
    setShowModal(true)
    setEdit(false)
  }
  const onclickEdit = () => {
    setShowModal(true)
    setEdit(true)
  }

  return (
    <GlobalProvider>

      <div className="App">

        <button 
          onClick= {() => onclickAdd() } 
          className="btn-add"
        >
          Add New User
        </button>

        <Table setEditData={setEditData} setShowModale={onclickEdit}/>

      </div>

      <Modal show={showModal} closeModal={() => setShowModal(false)}>
      
        {!edit ? 
        <Adduser closeModal={() => setShowModal(false)} />
        :
        <EditUserData editData={editData} setEditData={setEditData} closeModal={() => setShowModal(false)}/>}
      </Modal>
      
    </GlobalProvider>
  );
}


export default App;