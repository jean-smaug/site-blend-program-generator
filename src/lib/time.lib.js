import _ from 'lodash';
import { Conference } from '../app/smoothie/smoothie.type';

export const convertHourToString = (hour) => {
  if (hour < 10) {
    return 'eigth';
  } else if (hour < 12) {
    return 'ten';
  } else if (hour < 16) {
    return 'fourteen';
  }
  return 'sixteen';
};

/**
 * time {String} format 15h05
 */
export const getEndTime = (time, duration) => {
  const [hour, minute] = _.map(
    _.split(time, 'h'),
    item => (!_.isNaN(_.parseInt(item)) ? _.parseInt(item) : 0),
  );
  const tempMinute = minute + duration;
  const moduloMinute = tempMinute % 60;

  const finalMinute = tempMinute >= 60 ? _.padStart(moduloMinute, 2, '0') : tempMinute;
  const finalHour = tempMinute >= 60 ? hour + 1 : hour;

  return `${finalHour}h${finalMinute}`;
};

/**
 * get timestamps
 */

export const convertToMinutes = (conference: Conference) => {
  const [hour, minute] = _.map(
    _.split(conference.timeBegin, 'h'),
    item => (!_.isNaN(_.parseInt(item)) ? _.parseInt(item) : 0),
  );

  const minuteBegin = hour * 60 + minute;
  const minuteEnd = hour * 60 + minute + conference.duration;
  return { minuteBegin, minuteEnd };
};
