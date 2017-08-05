import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Blender } from './blender.component';

describe('blender.component', () => {
  let wrapper;
  let store;
  const mockStore = configureStore();
  const initialState = {};

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Blender store={store} />);
  });

  it('should render blender component', () => {
    wrapper = shallow(<Blender />);
    expect(wrapper.getNodes()).toMatchSnapshot();
  });
});
