import _ from 'lodash';

/**
 * Return conferences filtered by domain
 * @param {Object} data
 * @param {String} domain
 */
export const filterByDomain = (data, domain) => _.filter(data, item => item.domain === domain);

/**
 * Return conferences filtered by level
 * @param {Object} data
 * @param {String} level
 */
export const filterByLevel = (data, level) => _.filter(data, item => item.level === level);

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
export const orderConferences = (data) => {
  const result = {
    dayOne: { eight: [], ten: [], fourteen: [], sixteen: [] },
    dayTwo: { eight: [], ten: [], fourteen: [], sixteen: [] },
  };

  _.forEach(data, (item) => {
    const switcher = _.split(item.timeBegin, 'h')[0];
    if (switcher < 10) {
      result[item.day].eight.push(item);
    } else if (switcher < 12) {
      result[item.day].ten.push(item);
    } else if (switcher < 16) {
      result[item.day].fourteen.push(item);
    } else {
      result[item.day].sixteen.push(item);
    }
  });
  return result;
};

/**
 * Retourne les tags des conférences en supprimant les doublons
 * @param {Array} conferences
 */
export const getTags = conferences => _.uniq(_.flatten(_.map(conferences, item => item.tags)));
