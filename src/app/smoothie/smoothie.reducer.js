import * as conferencesStorage from '../../lib/localStorage.lib';

const initialState = {
  dayOne: conferencesStorage.getConferencesStore().dayOne || {},
  dayTwo: conferencesStorage.getConferencesStore().dayTwo || {},
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONFERENCES':
      return {
        ...state,
        dayOne: action.data.dayOne,
        dayTwo: action.data.dayTwo,
      };
    default:
      return state;
  }
};

export default formReducer;
