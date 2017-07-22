import data from './data-test.json';

import {
  filterByDomain,
  filterByLevel,
  filterByLevelAndDomain,
  orderConfences,
} from './filter';

it('should filter conferences by domain', () => {
  expect(filterByDomain(data, 'tech').length).toBe(11);
  expect(filterByDomain(data, 'blend').length).toBe(10);
});

it(' should filter conferences by domain', () => {
  expect(filterByLevel(data, 'tech').length).toBe(30);
  expect(filterByLevel(data, 'noob').length).toBe(20);
});

it('should filter conferences by domain and level', () => {
  const filters = [
    {
      level: 'noob',
      domain: 'tech',
    },
    {
      level: 'tech',
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
  expect(filterByLevelAndDomain(data, filters2).length).toBe(7);
});

it('should', () => {
  expect(orderConfences(data)).toBe(1);
});
