import { MIX_CONFERENCES, REMOVE_CONFERENCES, SWITCH_CONFERENCE } from '../constants';

import { Conference } from './smoothie.type';

export const mixConferencesAction = (conferences: Array<Conference>) => ({
  type: MIX_CONFERENCES,
  data: {
    dayOne: conferences.dayOne,
    dayTwo: conferences.dayTwo,
  },
});

export const removeConferences = () => ({
  type: REMOVE_CONFERENCES,
});

export const switchConference = (conference: Conference) => ({
  type: SWITCH_CONFERENCE,
  data: { conference },
});

export const restoreConferences = () => ({
  type: 'RESTORE_CONFERENCE',
});
