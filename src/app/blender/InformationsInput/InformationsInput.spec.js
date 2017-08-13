import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import InformationsInput from './InformationsInput.component';

const state = {
  firstname: '',
  lastname: '',
  email: '',
  isValidEmail: true,
};

describe('InformationsInput.component', () => {
  let wrapper;
  let store;
  const mockStore = configureStore();
  const initialState = state;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<InformationsInput store={store} />);
  });

  it('should render component', () => {
    expect(wrapper.getNodes()).toMatchSnapshot();
  });
});
