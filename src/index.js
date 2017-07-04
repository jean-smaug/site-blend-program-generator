import React from "react";
import ReactDOM from "react-dom";
import { createStore }  from 'redux'
import { Provider }     from 'react-redux'
import allReducers  from './reducers/reducer'
import AppContainer from "./components/App/AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const store = createStore(allReducers)

ReactDOM.render(
  <Provider store={ store }>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();



