import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Mixeur } from './mixeur.component';

describe('blender.component', () => {
  let wrapper;
  let store;
  const mockStore = configureStore();
  const initialState = {};

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Mixeur store={store} />);
  });

  it('should render blender component', () => {
    wrapper = shallow(<Mixeur />);
    expect(wrapper.getNodes()).toMatchSnapshot();
  });
});
