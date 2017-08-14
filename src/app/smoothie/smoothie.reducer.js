import * as conferencesStorage from '../../lib/localStorage.lib';

const initialState = {
  dayOne: conferencesStorage.getConferencesStore().dayOne || {},
  dayTwo: conferencesStorage.getConferencesStore().dayTwo || {},
  isSwitcherOpened: false,
  substitutionConferencesPath: '',
  switcherConferences: [],
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

    case 'SWITCH_CONFERENCE': {
      const { conference, conference: { date, timeBegin } } = payload.data;
      return { ...state, [date[timeBegin]]: conference };
    }

    case 'OPEN_SWITCHER':
      return {
        ...state,
        isSwitcherOpened: true,
        switcherConferences: payload.data.conferences,
      };

    case 'CLOSE_SWITCHER':
      return {
        ...state,
        isSwitcherOpened: false,
        switcherConferences: [],
      };

    default:
      return state;
  }
};
