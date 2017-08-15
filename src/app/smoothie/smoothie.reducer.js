import {
  MIX_CONFERENCES,
  REMOVE_CONFERENCES,
  SWITCH_CONFERENCE,
  OPEN_SWITCHER,
  CLOSE_SWITCHER,
} from '../constants';
import { getConferencesStore } from '../../lib/localStorage.lib';
import { convertHourToString } from '../../lib/time.lib';

const initialState = {
  dayOne: getConferencesStore().dayOne || {},
  dayTwo: getConferencesStore().dayTwo || {},
  isSwitcherOpened: false,
  substitutionConferencesPath: '',
  switcherConferences: [],
};

export default (state = initialState, payload) => {
  switch (payload.type) {
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

    case SWITCH_CONFERENCE: {
      const { conference, conference: { day, timeBegin } } = payload.data;
      const time = timeBegin.split('h')[0];
      console.log(state[day][convertHourToString(time)]);
      return { ...state, conference };
    }

    case OPEN_SWITCHER:
      return {
        ...state,
        isSwitcherOpened: true,
        switcherConferences: payload.data.conferences,
        currentConferenceId: payload.data.currentConferenceId,
      };

    case CLOSE_SWITCHER:
      return {
        ...state,
        isSwitcherOpened: false,
        switcherConferences: [],
      };

    default:
      return state;
  }
};
