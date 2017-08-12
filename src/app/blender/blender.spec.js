import React from 'react';
import { shallow } from 'enzyme';
import Blender from './blender.component';

describe('blender.component', () => {
  it('should render blender component', () => {
    const wrapper = shallow(<Blender />);
    expect(wrapper.getNodes()).toMatchSnapshot();
  });
});
