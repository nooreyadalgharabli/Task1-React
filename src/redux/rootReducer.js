import { combineReducers } from 'redux'
import userDataReducer from './user/userReducer'


const rootReducer = combineReducers({
    userData: userDataReducer,
})

export default rootReducer