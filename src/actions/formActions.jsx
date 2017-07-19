
/**
 * Add a Keyword to the state
 * @param word
 * @returns {{type: string, data: {word: *}}}
 */
export const addKeyword = (word) => {
  return {
    type: 'ADD_KEYWORD',
    data: {
      word: word
    }
  }
};

/**
 * Remove a Keyword to the state
 * @param word
 * @returns {{type: string, data: {word: *}}}
 */
export const removeKeyword = (word) => {
  return {
    type: 'REMOVE_KEYWORD',
    data: {
      word: word
    }
  }
};
