/**
 * Add a conferences to the smoothie state
 * @param conferences
 * @returns {{type: string, data: {word: *}}}
 */
export const addConferences = conferences => ({
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

