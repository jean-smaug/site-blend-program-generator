// @flow

import _ from 'lodash';
import { Conferences } from '../app/smoothie/smoothie.type';

/**
 * Return conferences filtered by domain
 */
export const filterByDomain = (conferences: Conferences, domain: string) =>
  _.filter(conferences, conference => conference.domain === domain);

/**
 * Return conferences filtered by level
 */
export const filterByLevel = (conferences: Conferences, level: string) =>
  _.filter(conferences, conference => conference.level === level);

/**
 * Filter conferences by level and by domain
 * @param {Object} data
 * @param {Array} filters
 */
export const filterByLevelAndDomain = (conferences: Conferences, filters = []) =>
  _.filter(conferences, conference =>
    _.includes(
      _.map(filters, (filter) => {
        if (filter.domain === conference.domain && filter.level === conference.level) {
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
export const orderConferences = (conferences: Conferences) => {
  const result = {
    dayOne: { eight: [], ten: [], fourteen: [], sixteen: [] },
    dayTwo: { eight: [], ten: [], fourteen: [], sixteen: [] },
  };

  _.forEach(conferences, (conference) => {
    const switcher = _.split(conference.timeBegin, 'h')[0];
    if (switcher < 10) {
      result[conference.day].eight.push(conference);
    } else if (switcher < 12) {
      result[conference.day].ten.push(conference);
    } else if (switcher < 16) {
      result[conference.day].fourteen.push(conference);
    } else {
      result[conference.day].sixteen.push(conference);
    }
  });
  return result;
};

/**
 * Return all tags
 */
export const getTags = (conferences: Conferences) =>
  _.uniq(_.flatten(_.map(conferences, item => item.tags)));
