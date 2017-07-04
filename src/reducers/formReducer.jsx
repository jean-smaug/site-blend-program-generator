
const initialState = {
  motsClef : []
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOTCLEF' :
      return {
        ...state,
        motsClef : [...state.motsClef, action.data.mot]
      }

    default:
      return state
  }
}

export default formReducer
