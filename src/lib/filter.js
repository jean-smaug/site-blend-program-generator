import _ from "lodash";

/**
 * Return conferences filtered by domain
 * @param {Object} data
 * @param {String} domain
 */
export const filterByDomain = (data, domain) =>
  _.filter(data, item => item.domain === domain);

/**
 * Return conferences filtered by level
 * @param {Object} data
 * @param {String} level
 */
export const filterByLevel = (data, level) =>
  _.filter(data, item => item.level === level);

/**
 *
 * @param {Object} data
 * @param {Array} filters
 */
export const filterByLevelAndDomain = (data, filters = []) => {
  return _.filter(data, item => {
    return _.forEach(filters, filter => {
      return filter.domain === item.domain && filter.level === item.level;
    });
  });
};
