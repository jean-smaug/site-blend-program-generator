import _ from "lodash";

export const filterByDomain = (data, domain) =>
  _.filter(data, item => item.domain === domain);

export const filterByLevel = (data, level) =>
  _.filter(data, item => item.level === level);
