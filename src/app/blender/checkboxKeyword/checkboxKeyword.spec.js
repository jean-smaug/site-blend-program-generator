import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { CheckboxKeywordComponent } from './checkboxKeyword.component';

const item = 'test';

describe('checkboxDomain.component', () => {
  let wrapper;
  let store;
  const mockStore = configureStore();
  const initialState = {};

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<CheckboxKeywordComponent item={item} store={store} />);
  });

  it('should render component', () => {
    expect(wrapper.getNodes()).toMatchSnapshot();
  });
});
