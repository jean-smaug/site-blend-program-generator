import { MIX_CONFERENCES, REMOVE_CONFERENCES, SWITCH_CONFERENCE } from '../constants';
import { getConferencesStore } from '../../lib/localStorage.lib';
import { convertHourToString, getEndTime, convertToMinutes } from '../../lib/time.lib';
import {
  reorderConferences,
  orderConferencesV2,
  reorderConferencesV2,
} from '../../lib/dataFilter.lib';

const initialState = {
  dayOne: getConferencesStore().dayOne || {},
  dayTwo: getConferencesStore().dayTwo || {},
  isSwitcherOpened: false,
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
      const letterTime = convertHourToString(time);
      const timeSlotConferences = state[day][letterTime];

      const { selected } = timeSlotConferences;
      console.log(timeSlotConferences);
      return {
        ...state,
      };
      // return {
      //   ...state,
      //   isSwitcherOpened: false,
      //   [day]: {
      //     ...state[day],
      //     [letterTime]: reorderConferences(conference, timeSlotConferences),
      //   },
      // };
    }

    default:
      return state;
  }
};
