/**
 * Add a Keyword to the state
 * @param word
 * @returns {{type: string, data: {word: *}}}
 */
export const addKeyword = word => ({
  type: 'ADD_KEYWORD',
  data: {
    word,
  },
});

/**
 * Remove a Keyword to the state
 * @param word
 * @returns {{type: string, data: {word: *}}}
 */
export const removeKeyword = word => ({
  type: 'REMOVE_KEYWORD',
  data: {
    word,
  },
});

/**
 * Add a Theme to the state
 * @param theme
 */
export const addTheme = theme => ({
  type: 'ADD_THEME',
  data: {
    theme,
  },
});

/**
 * Remove a Theme to the state
 * @param theme
 */
export const removeTheme = theme => ({
  type: 'REMOVE_THEME',
  data: {
    theme,
  },
});

/**
 * Update level of Theme to the state
 * @param theme
 */
export const updateLevel = theme => ({
  type: 'UPDATE_LEVEL_THEME',
  data: {
    theme,
  },
});
