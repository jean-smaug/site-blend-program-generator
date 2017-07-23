import React from 'react';
import { shallow } from 'enzyme';
import ListConference from '../ListConference';

const conferences = [
  {
    timeEnd: 18,
    timeBegin: 16,
    date: 'day2',
    domain: 'blend',
    level: 'noob',
    description: 'Esse amet tempor aute sunt. Magna voluptate nulla duis ullamco amet nisi proident eiusmod duis.',
    name: 'nisi nostrud',
    _id: '59724990bb9d86db92537dba',
  },
  {
    timeEnd: 12,
    timeBegin: 10,
    date: 'day2',
    domain: 'market',
    level: 'confirmed',
    description: 'Nisi elit aute amet magna. Mollit id ipsum amet cillum ea in duis duis officia irure dolor sint.',
    name: 'tempor anim',
    _id: '5972499025b0804dc2b05651',
  },
  {
    timeEnd: 12,
    timeBegin: 10,
    date: 'day2',
    domain: 'tech',
    level: 'noob',
    description: 'Ex sit deserunt mollit dolore irure in ad nostrud minim enim. Consectetur aute aute culpa dolor irure velit consequat ullamco.',
    name: 'ad deserunt',
    _id: '59724990716a4f824a36b3c5',
  },
];

describe('conference component', () => {
  it('should render conferences', () => {
    const listConference = shallow(
      <ListConference conferences={conferences} />,
    );
    console.log(listConference);
    expect(listConference.find('Conference').length).toBe(3);
  });
});
