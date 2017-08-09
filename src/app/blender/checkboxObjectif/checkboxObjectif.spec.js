import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { CheckboxObjectifComponent } from './checkboxObjectif.component';

const item = {
  id: '1',
  libelle: 'tech',
};

describe('checkboxDomain.component', () => {
  let wrapper;
  let store;
  const mockStore = configureStore();
  const initialState = {};

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<CheckboxObjectifComponent item={item} store={store} />);
  });

  it('should render component', () => {
    expect(wrapper.getNodes()).toMatchSnapshot();
  });
});
