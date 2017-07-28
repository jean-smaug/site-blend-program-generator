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

/**
 * Add an objectif to the state
 * @param objectif
 * @returns {{type: string, data: {objectif: *}}}
 */
export const addObjectif = objectif => ({
  type: 'ADD_OBJECTIF',
  data: {
    objectif,
  },
});

/**
 * Remove an objectif from the state
 * @param objectif
 * @returns {{type: string, data: {objectif: *}}}
 */
export const removeObjectif = objectif => ({
  type: 'REMOVE_OBJECTIF',
  data: {
    objectif,
  },
});
