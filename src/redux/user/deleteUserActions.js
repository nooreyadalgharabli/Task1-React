import { DELETE_USER } from './userTypes'

// function creator return object
export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}
