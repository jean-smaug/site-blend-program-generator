import * as conferencesStorage from '../../lib/localStorage.lib';

const initialState = {
  conferences: conferencesStorage.getConferencesStore(),
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONFERENCES':
      return {
        ...state,
        conferences: action.data.conferences,
      };
    default:
      return state;
  }
};

export default formReducer;
