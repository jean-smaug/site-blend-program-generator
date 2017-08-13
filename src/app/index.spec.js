import React from 'react';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { App } from './index';

describe('app.component', () => {
  let store;
  let tree;
  const mockStore = configureStore();
  const initialState = {
    smoothie: { dayOne: {}, dayTwo: {} },
  };

  beforeEach(() => {
    store = mockStore(initialState);
    tree = renderer.create(<App store={store} />).toJSON();
  });

  it('=== SNAPSHOT ===', () => {
    expect(tree).toMatchSnapshot();
  });
});
