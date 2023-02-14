import { useEffect, useReducer } from "react"
import { createContext } from "react";
import AppReducer from "./AppReducer";



// Initial state
const initialState = {
    data: []
}

// Create context object
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=1")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            dispatch({ type: "fetch_data", payload: data.data});
          });
      }, []);

    function deleteHandler(id) {
        dispatch({
            type: 'DELETE_USER',
            payload: id,
        });
    };

    function addNewUserHandller(data) {
      dispatch({
        type: 'ADD_USER',
        payload: data
      });
    };

    function onUpdateUser(updatedUser) {
      dispatch({
        type: 'UPDATE_USER',
        payload: updatedUser})
    }

  return (<GlobalContext.Provider value={{
    data: state.data,
    deleteHandler,
    addNewUserHandller,
    onUpdateUser
  }}>
    {children}
  </GlobalContext.Provider>);
}