import * as conferencesStorage from '../../lib/localStorage.lib';

const initialState = {
  dayOne: conferencesStorage.getConferencesStore().dayOne || {},
  dayTwo: conferencesStorage.getConferencesStore().dayTwo || {},
};

export default (state = initialState, payload) => {
  switch (payload.type) {
    case 'ADD_CONFERENCES':
      return {
        ...state,
        dayOne: payload.data.dayOne,
        dayTwo: payload.data.dayTwo,
      };
    case 'REMOVE_CONFERENCES':
      return {
        ...state,
        dayOne: {},
        dayTwo: {},
      };

    case 'SWITCH_CONFERENCE':
      console.log(payload);
      // return { ...state, conferences: data.conferences };
      return { ...state };

    default:
      return state;
  }
};
