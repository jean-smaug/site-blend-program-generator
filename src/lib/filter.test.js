import data from './data-test.json';

import {
  filterByDomain,
  filterByLevel,
  filterByLevelAndDomain,
  orderConfences,
} from './filter';

it('should filter conferences by domain', () => {
  expect(filterByDomain(data, 'tech').length).toBe(19);
  expect(filterByDomain(data, 'blend').length).toBe(25);
});

it('should filter conferences by level', () => {
  expect(filterByLevel(data, 'confirmed').length).toBe(56);
  expect(filterByLevel(data, 'noob').length).toBe(44);
});

it('should filter conferences by domain and level', () => {
  const filters = [
    {
      level: 'noob',
      domain: 'tech',
    },
    {
      level: 'confirmed',
      domain: 'tech',
    },
  ];
  const filters2 = [
    {
      level: 'noob',
      domain: 'tech',
    },
    {
      level: 'noob',
      domain: 'design',
    },
  ];

  expect(filterByLevelAndDomain(data, filters).length).toBe(
    filterByDomain(data, 'tech').length,
  );
  expect(filterByLevelAndDomain(data, filters2).length).toBe(19);
});

it('should reorder conferences', () => {
  expect(orderConfences(data).day1.eight.length).toBe(0);
  expect(orderConfences(data).day1.ten.length).toBe(26);
  expect(orderConfences(data).day1.fourteen.length).toBe(4);
  expect(orderConfences(data).day1.sixteen.length).toBe(4);
});
