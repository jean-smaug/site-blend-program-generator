import _ from 'lodash';

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
export const filterByLevelAndDomain = (data, filters = []) =>
  _.filter(data, item =>
    _.includes(
      _.map(filters, (filter) => {
        if (filter.domain === item.domain && filter.level === item.level) {
          return true;
        }
        return false;
      }),
      true,
    ),
  );

export const orderConfences = (data) => {
  let result = { eight: [], ten: [], fourteen: [], sixteen: [] };
  _.forEach(data, (item) => {
    switch (item.dateBegin) {
      case value:
        break;

      default:
        break;
    }
  });
};
