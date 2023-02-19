
const AppReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_data': 
        return {
          ...state,
          data: action.payload,
        };
    case 'DELETE_USER':
        return {
          ...state,
          data: state.data.filter(user => user.id !== action.payload)
        };
    case 'ADD_USER':
        return {
        ...state,
          data: [...state.data, action.payload]
        };
    case 'UPDATE_USER':
      return {
        ...state,
          data: state.data.map(user => user.id === action.payload.id? action.payload : user)
        };
    default:
        return state;
  }
}

export default AppReducer
