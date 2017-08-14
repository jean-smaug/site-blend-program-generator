import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { MixeurComponent } from './mixeur.component';

describe('blender.component', () => {
  let tree;
  let store;
  const mockStore = configureStore();
  const initialState = {};

  beforeEach(() => {
    store = mockStore(initialState);
    tree = renderer.create(<MixeurComponent store={store} />).toJSON();
  });

  it('should render blender component', () => {
    expect(tree).toMatchSnapshot();
  });
});
