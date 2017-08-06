import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MixeurComponent } from './mixeur.component';

describe('blender.component', () => {
  let wrapper;
  let store;
  const mockStore = configureStore();
  const initialState = {};

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<MixeurComponent store={store} />);
  });

  it('should render blender component', () => {
    expect(wrapper.getNodes()).toMatchSnapshot();
  });
});
