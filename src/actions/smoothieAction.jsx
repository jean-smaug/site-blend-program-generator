
/**
 * Add a conferences to the smoothie state
 * @param conferences
 * @returns {{type: string, data: {word: *}}}
 */
export const addConferences = (conferences) => {
  return {
    type: 'ADD_CONFERENCES',
    data: {
      conferences: conferences
    }
  }
};
