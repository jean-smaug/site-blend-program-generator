import { getEndTime, convertToMinutes } from './time.lib';

const conferences = [
  {
    day: 'dayOne',
    duration: 15,
    timeBegin: '16h40',
    title: 'React en 2017',
  },
  {
    day: 'dayOne',
    duration: 15,
    timeBegin: '16h',
    title: 'React en 2017',
  },
];

describe('time.lib', () => {
  it('should return the correct final time', () => {
    expect(getEndTime('10h10', 15)).toBe('10h25');
    expect(getEndTime('10h50', 25)).toBe('11h15');
    expect(getEndTime('10h50', 15)).toBe('11h05');
  });

  it('should convert hours and minute to timestamp', () => {
    expect(convertToMinutes(conferences[0])).toEqual({ minuteBegin: 1000, minuteEnd: 1015 });
    expect(convertToMinutes(conferences[1])).toEqual({ minuteBegin: 960, minuteEnd: 975 });
  });
});
