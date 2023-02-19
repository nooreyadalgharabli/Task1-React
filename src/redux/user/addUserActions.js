import { ADD_CHANGE, ADD_USER } from "./userTypes"


export const addUser = (addedUser) => {
    return {
        type: ADD_USER,
        payload: addedUser
    }
}

export const onChangeADDUser = (e) => {
    return {
        type: ADD_CHANGE,
        payload: e
    }
}