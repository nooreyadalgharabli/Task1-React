import { ADD_USER, DELETE_USER, EDIT_USER, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

const initialState = {
    loading: false,
    users: [],
    error: '',
    // editData: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
              ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
              ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        case EDIT_USER:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        // case CAPTUREID:
        //     return {
        //         ...state,
        //         editData: action.payload
        //     }
        default: return state
    }
}

export default reducer