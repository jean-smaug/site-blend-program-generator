import React from 'react';
import { shallow } from 'enzyme';
import { SmoothieComponent } from './smoothie.component';

const props = {
  dayOne: {},
  dayTwo: {},
};

describe('Smoothie component', () => {
  it('should render Smoothie Component', () => {
    if (!global.window.localStorage) {
      global.window.localStorage = {
        getItem() { return '{}'; },
        setItem() {},
      };
    }
    const smoothie = shallow(
      <SmoothieComponent dayOne={props.dayOne} dayTwo={props.dayTwo} />,
    );
    expect(smoothie).toMatchSnapshot();
    expect(1).toBe(1);
  });
});
