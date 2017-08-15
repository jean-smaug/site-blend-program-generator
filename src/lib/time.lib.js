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

export const foo = () => 1;
