import { CAPTUREID, EDIT_CHANGE, EDIT_USER } from "./userTypes"

export const editUser = ( editedUser ) => {
    return {
        type: EDIT_USER,
        payload: editedUser
    }
}

export const captureEditID = (clickedID) => {
    return {
        type: CAPTUREID,
        payload: clickedID
    }
  }

export const onChangeEditUser = (element) => {
    return {
        type: EDIT_CHANGE,
        payload: element
    }
}