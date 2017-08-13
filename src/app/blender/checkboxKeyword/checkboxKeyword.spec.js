import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { CheckboxKeywordComponent } from './checkboxKeyword.component';

describe('checkboxKeyword.component', () => {
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
    tree = renderer.create(<CheckboxKeywordComponent item={props.item} store={store} />).toJSON();
  });

  it('=== SNAPSHOT ===', () => {
    expect(tree).toMatchSnapshot();
  });
});
