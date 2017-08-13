import React from 'react';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import CheckboxDomain, { CheckboxDomainComponent } from './checkboxDomain.component';

describe('checkboxDomain.component', () => {
  let tree;
  let store;
  const mockStore = configureStore();
  const initialState = {};
  const props = {
    item: {
      id: '1',
      libelle: 'tech',
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
    tree = renderer.create(<CheckboxDomainComponent item={props.item} store={store} />).toJSON();
  });

  it('=== SNAPSHOT ===', () => {
    expect(tree).toMatchSnapshot();
  });
});
