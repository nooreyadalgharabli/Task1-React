import { Fragment, useEffect, useState } from 'react';
import Table from './component/Table';
import Modal from './component/Modal/Modal';
import Adduser from './component/Adduser/Adduser';
import EditUserData from './component/EditUserData/EditUserData';
import './App.css';


function App() {

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(true);
  const [editData, setEditData] = useState([{
    id: "",
    first_name: "",
    last_name: "",
    avatar: "",
    email: "",
  }]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.data);
      });
  }, []);
  
  const addNewUserHandller = (data) => {
    setData((prevState) => [...prevState, data]);
  };

  function onUpdateUser(updatedUser) {
    const updatedUsers = data.map(
      user => {
        if (user.id === updatedUser.id) {
          return updatedUser
        } else {return user}
      }
    )
    setData(updatedUsers)
  }

  // const editUserHandller = (user) => {
  //   setData((oldVal) => {
  //        const oldList = [...data];
  //        const index = oldList.findIndex((item) => item.id === user.id);
  //        oldList[index] = user;
  //        return oldList;
  //      });
  // }
  

  const onclickAdd = () => {
    setShowModal(true)
    setEdit(false)
  }
  const onclickEdit = () => {
    setShowModal(true)
    setEdit(true)
  }

  return (
    <Fragment>

      <div className="App">

        <button 
          onClick= {() => onclickAdd() } 
          className="btn-add"
        >
          Add New User
        </button>

        <Table setEditData={setEditData} data={data} setData={setData} setShowModale={onclickEdit}/>

      </div>

      <Modal show={showModal} closeModal={() => setShowModal(false)}>
      
        {!edit ? 
        <Adduser addNewUserHandller={addNewUserHandller} closeModal={() => setShowModal(false)} />
        :
        <EditUserData onUpdateUser={onUpdateUser} editData={editData} setEditData={setEditData} closeModal={() => setShowModal(false)}/>}
      </Modal>
      
    </Fragment>
  );
}


export default App;