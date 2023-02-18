import { ADD_USER } from "./userTypes"


export const addUser = (addedUser) => {
    return {
        type: ADD_USER,
        payload: addedUser
    }
}