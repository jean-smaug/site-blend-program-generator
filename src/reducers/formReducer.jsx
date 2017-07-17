
const initialState = {
  keywords : []
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_KEYWORD' :
      return {
        ...state,
        keywords : [...state.keywords, action.data.word]
      }

    default:
      return state
  }
}

export default formReducer
