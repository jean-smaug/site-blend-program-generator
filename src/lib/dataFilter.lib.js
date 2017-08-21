// @flow

import _ from 'lodash';
import { Conference, Conferences } from '../app/smoothie/smoothie.type';
import { getEndTime, convertToMinutes } from './time.lib';

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
 */
type Filters = [{ domain: string, level: string }];
export const filterByLevelAndDomain = (conferences: Conferences, filters: Filters) =>
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

export const reorderConferences = (conference: Conference, conferences: Conferences) => {
  const remaingingConferences = _.pull(conferences, conference);
  return _.concat(conference, remaingingConferences);
};

/**
 * Return all tags
 */
export const getTags = (conferences: Conferences) =>
  _.uniq(_.flatten(_.map(conferences, item => item.tags)));

/**
 *
 * @param {*} currentConferences
 * @param {*} newConference
 */
const isConferenceSlotFree = (currentConferences, newConference) => {
  const timeSlotCurrentConferences = [];
  let isSlotFree = true;

  _.forEach(currentConferences, (currentConference) => {
    timeSlotCurrentConferences.push(convertToMinutes(currentConference));
  });

  const { minuteBegin, minuteEnd } = convertToMinutes(newConference);

  _.forEach(timeSlotCurrentConferences, (item, key) => {
    if (minuteBegin) {
      isSlotFree = false;
    }
  });

  return isSlotFree;
};

/**
 *
 */
export const orderConferencesV2 = (conferences: Conferences) => {
  const smoothie = {
    dayOne: {
      eight: {
        selected: [],
        remaining: [],
      },
      ten: {
        selected: [],
        remaining: [],
      },
      fourteen: {
        selected: [],
        remaining: [],
      },
      sixteen: {
        selected: [],
        remaining: [],
      },
    },
    dayTwo: {
      eight: {
        selected: [],
        remaining: [],
      },
      ten: {
        selected: [],
        remaining: [],
      },
      fourteen: {
        selected: [],
        remaining: [],
      },
      sixteen: {
        selected: [],
        remaining: [],
      },
    },
  };

  _.forEach(conferences, (item) => {
    const timeBegin = getEndTime(item);
    const day = smoothie[item.day][timeBegin];

    if (isConferenceSlotFree(day.selected, item)) {
      day.selected.push(item);
    } else {
      day.remaining.push(item);
    }
  });

  _.orderBy(smoothie.dayOne.selected, 'timeBegin', 'asc');
  _.orderBy(smoothie.dayTwo.selected, 'timeBegin', 'asc');

  return smoothie;
};
