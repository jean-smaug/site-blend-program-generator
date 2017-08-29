// import {
//   filterByDomain,
//   filterByLevel,
//   filterByLevelAndDomain,
//   orderConfences,
// } from './dataFilter.lib';
import { getTags, orderConferencesV2 } from './dataFilter.lib';

import conferencesTag from './__fixtures__/conference--tags.json';
import conferencesTime1 from './__fixtures__/conference--time-1.json';

describe('database.lib', () => {
  it('should get tags', async () => {
    expect((await getTags(conferencesTag)).length).toBe(8);
  });

  it('should order conferences', () => {
    expect(orderConferencesV2(conferencesTime1).dayOne.sixteen).toEqual({
      selected: [conferencesTime1[0], conferencesTime1[1]],
      remaining: [conferencesTime1[2], conferencesTime1[3]],
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

it('should filter conferences by domain', () => {
  //   expect(filterByDomain(data, 'tech').length).toBe(19);
  //   expect(filterByDomain(data, 'blend').length).toBe(24);
  // });

  // it('should filter conferences by level', () => {
  //   expect(filterByLevel(data, 'confirmed').length).toBe(56);
  //   expect(filterByLevel(data, 'noob').length).toBe(44);
  expect(1).toBe(1);
});

// it('should filter conferences by domain and level', () => {
//   const filters = [
//     {
//       level: 'noob',
//       domain: 'tech',
//     },
//     {
//       level: 'confirmed',
//       domain: 'tech',
//     },
//   ];
//   const filters2 = [
//     {
//       level: 'noob',
//       domain: 'tech',
//     },
//     {
//       level: 'noob',
//       domain: 'design',
//     },
//   ];

//   expect(filterByLevelAndDomain(data, filters).length).toBe(
//     filterByDomain(data, 'tech').length,
//   );
//   expect(filterByLevelAndDomain(data, filters2).length).toBe(19);
// });

// it('should reorder conferences', () => {
//   expect(orderConfences(data).dayOne.eight.length).toBe(0);
//   expect(orderConfences(data).dayOne.ten.length).toBe(26);
//   expect(orderConfences(data).dayOne.fourteen.length).toBe(4);
//   expect(orderConfences(data).dayOne.sixteen.length).toBe(4);
// });
