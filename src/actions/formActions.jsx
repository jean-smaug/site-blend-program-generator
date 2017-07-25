
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
 * Add a Domain to the state
 * @param domain
 */
export const addDomain = (domain) => {
  return {
    type: 'ADD_DOMAIN',
    data: {
      domain: domain
    }
  }
};

/**
 * Remove a Domain to the state
 * @param domain
 */
export const removeDomain = (domain) => {
  return {
    type: 'REMOVE_DOMAIN',
    data: {
      domain: domain
    }
  }
};

/**
 * Update level of Domain to the state
 * @param domain
 */
export const updateLevel = (domain) => {
  return {
    type: 'UPDATE_LEVEL_DOMAIN',
    data: {
      domain: domain
    }
  }
};

