import React from 'react';
import { shallow } from 'enzyme';
import { App } from './index';

const props = {
  smoothie: { conferences: [], dayOne: {}, dayTwo: {} },
};

describe('app.component', () => {
  it('should render App Component', () => {
    const smoothie = shallow(<App {...props} />);
    expect(smoothie).toMatchSnapshot();
  });
});
