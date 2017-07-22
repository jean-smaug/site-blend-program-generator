import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/reducer';
import AppContainer from './components/App/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import logger from 'redux-logger';

const store = createStore(allReducers,
  applyMiddleware(logger),
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();

