/**
 * Add a conferences to the smoothie state
 * @param conferences
 * @returns {{type: string, data: {word: *}}}
 */
export const addConferenceAction = conferences => ({
  type: 'ADD_CONFERENCES',
  data: {
    dayOne: conferences.dayOne,
    dayTwo: conferences.dayTwo,
  },
});

/**
 * remove all conferences to the smoothie state
 * @param conferences
 * @returns {{type: string, data: {word: *}}}
 */
export const removeConferences = () => ({
  type: 'REMOVE_CONFERENCES',
});

export const switchConference = conference => ({
  type: 'SWITCH_CONFERENCE',
  data: { conference },
});

export const closeSwitcherAction = () => ({
  type: 'CLOSE_SWITCHER',
});

export const openSwitcherAction = (currentConferenceId, conferences) => ({
  type: 'OPEN_SWITCHER',
  data: { currentConferenceId, conferences },
});
