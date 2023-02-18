import { EDIT_USER } from "./userTypes"

export const editUser = ( editedUser ) => {
    return {
        type: EDIT_USER,
        payload: editedUser
    }
}

// export const captureEdit = (clickedID) => ( getState ) => {
//     const state = getState();
//     console.log(state);
//     let filtered = state.userData.users.find(user => user.id === clickedID)
//     // console.log(state);
//     return {
//         type: CAPTUREID,
//         payload: filtered
//     }
//   }