
const initialState = {
  conferences: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONFERENCES' :
      return {
        ...state,
        conferences: action.data.conferences,
      };
    default:
      return state;
  }
};

export default formReducer;
