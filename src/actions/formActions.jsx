
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

/**
 * Add a Theme to the state
 * @param theme
 */
export const addTheme = (theme) => {
  return {
    type: 'ADD_THEME',
    data: {
      theme: theme
    }
  }
};

/**
 * Remove a Theme to the state
 * @param theme
 */
export const removeTheme = (theme) => {
  return {
    type: 'REMOVE_THEME',
    data: {
      theme: theme
    }
  }
};

/**
 * Update level of Theme to the state
 * @param theme
 */
export const updateLevel = (theme) => {
  return {
    type: 'UPDATE_LEVEL_THEME',
    data: {
      theme: theme
    }
  }
};

