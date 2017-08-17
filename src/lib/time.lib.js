import _ from 'lodash';

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
  const [hour, minute] = _.map(_.split(time, 'h'), _.parseInt);

  const tempMinute = minute + duration;
  const moduloMinute = tempMinute % 60;

  const finalMinute = moduloMinute > 10 ? tempMinute : _.padStart(tempMinute, 2, '0');
  const finalHour = tempMinute >= 60 ? hour + 1 : hour;

  return `${finalHour}h${finalMinute}`;
};
