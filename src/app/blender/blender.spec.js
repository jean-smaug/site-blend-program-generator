import React from 'react';
import { shallow } from 'enzyme';
import { mockStore } from 'redux-mock-store';
import ConnectedBlender, { Blender } from './blender.component';

describe('blender.component', () => {
  let wrapper,
    store;
  const initialState = {};
  const props = {};

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Blender />);
  });

  it('should render blender component', () => {
    wrapper = shallow(<Blender />);
    expect(wrapper.getNodes()).toMatchSnapshot();
  });
});
