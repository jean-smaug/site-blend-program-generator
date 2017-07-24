
/**import _ from 'lodash';

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
 * Filter conferences by level and by domain
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

/**
 * Return conferences reordered by days and by time
 * @param {Array} data
 */
export const orderConfences = (data) => {
  const result = {
    day1: { eight: [], ten: [], fourteen: [], sixteen: [] },
    day2: { eight: [], ten: [], fourteen: [], sixteen: [] },
  };
  _.forEach(data, (item) => {
    switch (item.timeBegin) {
      case 8:
        result[item.date].eight.push(item);
        break;
      case 10:
        result[item.date].ten.push(item);
        break;
      case 14:
        result[item.date].fourteen.push(item);
        break;
      case 16:
        result[item.date].sixteen.push(item);
        break;
      default:
        break;
    }
  });
  return result;
};
