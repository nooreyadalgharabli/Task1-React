import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import UserContainer from './components/UserContainer';
import { useState } from 'react';
import Modal from './components/Modal/Modal'
import EditUserContainer from './components/EditUserContainer';
import AddUserContainer from './components/AddUserContainer';


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
    <Provider store={store}>
      <div className="App">

        <button className="btn-add" onClick={onclickAdd}> Add New User </button>
        <UserContainer setEditData={setEditData} setShowModal={onclickEdit}/>

        <Modal show={showModal} closeModal={() => setShowModal(false)}> 
          {edit ?
          <EditUserContainer editData={editData} setEditData={setEditData} closeModal={() => setShowModal(false)}/>
          :
          <AddUserContainer closeModal={() => setShowModal(false)}/>
          }
        </Modal>

      </div>
    </Provider>
  );
}

export default App;