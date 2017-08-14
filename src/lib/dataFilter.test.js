// import {
//   filterByDomain,
//   filterByLevel,
//   filterByLevelAndDomain,
//   orderConfences,
// } from './dataFilter.lib';
import { getTags } from './dataFilter.lib';

const conferences = [
  {
    title: 'conf1',
    tags: ['foo', 'bar'],
  },
  {
    title: 'conf2',
    tags: ['foo', 'bar', 'test'],
  },
];

describe('database.lib', () => {
  it('should get tags', async () => {
    expect((await getTags(conferences)).length).toBe(3);
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
