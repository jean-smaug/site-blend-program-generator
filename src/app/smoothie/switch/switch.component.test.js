import React from 'react';
import { shallow } from 'enzyme';

import SwitchComponent from './switch.component';

const conferences = [
  {
    timeEnd: 18,
    timeBegin: 16,
    date: 'day2',
    domain: 'biz',
    level: 'noob',
    description: 'Esse amet tempor aute sunt. Magna voluptate nulla duis ullamco amet nisi proident eiusmod duis.',
    name: 'nisi nostrud',
    id: '59724990bb9d86db92537dba',
  },
  {
    timeEnd: 12,
    timeBegin: 10,
    date: 'day2',
    domain: 'market',
    level: 'confirmed',
    description: 'Nisi elit aute amet magna. Mollit id ipsum amet cillum ea in duis duis officia irure dolor sint.',
    name: 'tempor anim',
    id: '5972499025b0804dc2b05651',
  },
  {
    timeEnd: 12,
    timeBegin: 10,
    date: 'day2',
    domain: 'tech',
    level: 'noob',
    description: 'Ex sit deserunt mollit dolore irure in ad nostrud minim enim. Consectetur aute aute culpa dolor irure velit consequat ullamco.',
    name: 'ad deserunt',
    id: '59724990716a4f824a36b3c5',
  },
];

describe('switch component', () => {
  it('should render the switch component', () => {
    const Switch = shallow(
      <SwitchComponent id={0} conferences={conferences} />,
    );
    expect(Switch).toMatchSnapshot();
    // expect(Switch.children.length).toBe(3);
  });

  // it('detect click button', () => {
  //   const Switch = shallow(
  //     <SwitchComponent id={0} conferences={conferences} />,
  //   );
  // });
});
