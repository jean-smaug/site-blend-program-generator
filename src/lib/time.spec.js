import { getEndTime } from './time.lib';

describe('time.lib', () => {
  it('should return the correct final time', () => {
    expect(getEndTime('10h10', 15)).toBe('10h25');
    expect(getEndTime('10h50', 25)).toBe('11h15');
    expect(getEndTime('10h50', 15)).toBe('11h05');
  });
});
