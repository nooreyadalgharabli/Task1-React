import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, onChangeADDUser } from "../redux";
import Form from "./Form/Form";

const AddUserContainer = ({ closeModal }) => {

    const addData = useSelector((state) => state.userData.addData);
    const dispatch = useDispatch();

    const { first_name, last_name, avatar, email } = addData;

    const onSubmitHandler = (e) => {
        e.preventDefault();
    
        dispatch(addUser({
          id: Math.round(Math.random() * 100),
          first_name,
          last_name,
          avatar,
          email,
        }));

        closeModal();
      };

  return (
    <Form>
      <Form.Controller>
        <label htmlFor="first_name">First name</label>
        <input
          type="text"
          id="first_name"
          placeholder="Enter First name"
          value={first_name}
          onChange={(e) => dispatch(onChangeADDUser(e))}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="last_name">Last name</label>
        <input
          type="text"
          id="last_name"
          placeholder="Enter Last name"
          value={last_name}
          onChange={(e) => dispatch(onChangeADDUser(e))}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="avatar">Avatar</label>
        <input
          type="text"
          id="avatar"
          placeholder="Enter source of avatar"
          value={avatar}
          onChange={(e) => dispatch(onChangeADDUser(e))}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => dispatch(onChangeADDUser(e))}
        />
      </Form.Controller>

      <div style={{ marginTop: "20px" }}>
        <button onClick={onSubmitHandler}>Save</button>
      </div>
    </Form>
  );
};

export default AddUserContainer;
