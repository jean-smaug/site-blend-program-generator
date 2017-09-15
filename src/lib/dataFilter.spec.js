import {
  getTags,
  orderConferencesV2,
  filterByTags,
  filterConferences,
  filterByLevelAndDomain,
} from './dataFilter.lib';

import conferences from './__fixtures__/conferences.json';
import conferencesTag from './__fixtures__/conference--tags.json';
import conferencesTime1 from './__fixtures__/conference--time-1.json';
import conferencesTime2 from './__fixtures__/conference--time-2.json';

describe('database.lib', () => {
  it('should get tags', async () => {
    expect((await getTags(conferencesTag)).length).toBe(8);
  });

  it('should filter conferences by tag', () => {
    expect(filterByTags(conferencesTag, ['blog']).length).toBe(2);
    expect(filterByTags(conferencesTag, ['blog'])).toEqual([conferencesTag[2], conferencesTag[3]]);
    expect(filterByTags(conferencesTag, ['blog', 'ux', 'react']).length).toBe(4);
  });

  it('should filter conferences', () => {
    expect(filterConferences(conferences, [], ['blog']).length).toBe(2);
  });

  it('should order conferences', () => {
    expect(orderConferencesV2(conferencesTime1).dayOne.sixteen).toEqual({
      selected: [conferencesTime1[0], conferencesTime1[1]],
      remaining: [conferencesTime1[2], conferencesTime1[3]],
    });
    expect(orderConferencesV2(conferencesTime2).dayOne.sixteen).toEqual({
      selected: [conferencesTime2[0]],
      remaining: [conferencesTime2[1], conferencesTime2[2], conferencesTime2[3]],
    });
    expect(orderConferencesV2([])).toEqual({
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
    });
  });
});

it('should filter conferences by domain and level', () => {
  expect(
    filterByLevelAndDomain(conferences, [
      {
        domain: 'tech',
        level: 'beginner',
      },
    ]).length,
  ).toBe(2);

  expect(
    filterByLevelAndDomain(conferences, [
      {
        domain: 'tech',
        level: 'beginner',
      },
      {
        domain: 'design',
        level: 'beginner',
      },
    ]).length,
  ).toBe(3);
});

// it('should filter conferences by domain', () => {
//   expect(filterByDomain(data, 'tech').length).toBe(19);
//   expect(filterByDomain(data, 'blend').length).toBe(24);
// });

// it('should filter conferences by level', () => {
//   expect(filterByLevel(data, 'confirmed').length).toBe(56);
//   expect(filterByLevel(data, 'noob').length).toBe(44);
// expect(1).toBe(1);
// });

// it('should reorder conferences', () => {
//   expect(orderConfences(data).dayOne.eight.length).toBe(0);
//   expect(orderConfences(data).dayOne.ten.length).toBe(26);
//   expect(orderConfences(data).dayOne.fourteen.length).toBe(4);
//   expect(orderConfences(data).dayOne.sixteen.length).toBe(4);
// });
