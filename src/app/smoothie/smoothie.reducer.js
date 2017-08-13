import { MIX_CONFERENCES, REMOVE_CONFERENCES } from './smoothie.constant';
import * as conferencesStorage from '../../lib/localStorage.lib';

const initialState = {
  dayOne: conferencesStorage.getConferencesStore().dayOne || {},
  dayTwo: conferencesStorage.getConferencesStore().dayTwo || {},
  isSwitcherOpened: false,
  substitutionConferencesPath: '',
  switcherConferences: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case MIX_CONFERENCES:
      return {
        ...state,
        dayOne: payload.data.dayOne,
        dayTwo: payload.data.dayTwo,
      };
    case REMOVE_CONFERENCES:
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
