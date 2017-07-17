import _ from "lodash";

/**
 *
 * @param {Object} data
 * @param {String} domain
 */
export const filterByDomain = (data, domain) =>
  _.filter(data, item => item.domain === domain);

/**
 *
 * @param {Object} data
 * @param {String} level
 */
export const filterByLevel = (data, level) =>
  _.filter(data, item => item.level === level);

export const filterByLevelAndDomain = (data, filters) => {
  return _.filter(data);
};
