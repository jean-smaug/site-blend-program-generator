import {
  MIX_CONFERENCES,
  REMOVE_CONFERENCES,
  SWITCH_CONFERENCE,
  OPEN_SWITCHER,
  CLOSE_SWITCHER,
} from '../constants';

export const addConferenceAction = conferences => ({
  type: MIX_CONFERENCES,
  data: {
    dayOne: conferences.dayOne,
    dayTwo: conferences.dayTwo,
  },
});

export const removeConferences = () => ({
  type: REMOVE_CONFERENCES,
});

export const switchConference = conference => ({
  type: SWITCH_CONFERENCE,
  data: { conference },
});

export const closeSwitcherAction = () => ({
  type: CLOSE_SWITCHER,
});

export const openSwitcherAction = (currentConferenceId, conferences) => ({
  type: OPEN_SWITCHER,
  data: { currentConferenceId, conferences },
});
