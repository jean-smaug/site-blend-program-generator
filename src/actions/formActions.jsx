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
 * Add a Domain to the state
 * @param domain
 */
export const addDomain = domain => ({
  type: 'ADD_DOMAIN',
  data: {
    domain,
  },
});

/**
 * Remove a Domain to the state
 * @param domain
 */
export const removeDomain = domain => ({
  type: 'REMOVE_DOMAIN',
  data: {
    domain,
  },
});

/**
 * Update level of Domain to the state
 * @param domain
 */
export const updateLevel = domain => ({
  type: 'UPDATE_LEVEL_DOMAIN',
  data: {
    domain,
  },
});

