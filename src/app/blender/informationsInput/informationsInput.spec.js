import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import InformationsInput from './informationsInputcomponent';

const initialState = {
  informations: {
    firstname: '',
    lastname: '',
    email: '',
    isValidEmail: true,
  },
};

describe('InformationsInput.component', () => {
  let wrapper;
  let store;
  const mockStore = configureStore();

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<informationsInput store={store} />);
  });

  it('should render component', () => {
    expect(wrapper.getNodes()).toMatchSnapshot();
  });
});
