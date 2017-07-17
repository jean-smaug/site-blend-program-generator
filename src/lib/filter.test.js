import data from "./data-test.json";

import {
  filterByDomain,
  filterByLevel,
  filterByLevelAndDomain
} from "./filter";

it("filter conferences by domain", () => {
  expect(filterByDomain(data, "tech").length).toBe(11);
  expect(filterByDomain(data, "blend").length).toBe(10);
});

it("filter conferences by domain", () => {
  expect(filterByLevel(data, "tech").length).toBe(30);
  expect(filterByLevel(data, "noob").length).toBe(20);
});

it("filter conferences by domain and level", () => {
  const filters = [
    {
      level: "noob",
      domain: "tech"
    },
    {
      level: "tech",
      domain: "tech"
    }
  ];

  expect(filterByLevelAndDomain(data, filters).length).toBe(
    filterByDomain(data, "tech").length
  );
});
