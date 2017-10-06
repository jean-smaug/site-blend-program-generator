// @flow

/* eslint-disable max-len */

import React from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import './index.css';
import FormContainer from './blender/blender.component';
import SmoothieContainer from './smoothie/smoothie.component';
import changePageAction from './app.action';
import { getKeyStore } from '../lib/localStorage.lib';


export const App = ({page: {page}, changePage }: { page: String, changePage: () => void }) => (
  <div className="App">
    <div className="header">
      <a href="http://www.blendwebmix.com/">
        <img
          src="http://www.blendwebmix.com/wp-content/uploads/2017/04/Blend-Web-Mix-2-1-e1492005334702.png"
          width="145"
          height="45"
          alt="BlendWebMix 2017"
        />
      </a>
      {page === 'smoothie' ?
        <a className="button is-danger is-outlined remix" role="presentation" onClick={() => changePage('blender')}>Remix</a> : null}

      {getKeyStore() !== null && page === 'blender' ?
        <a className="button is-warning is-outlined remix" role="presentation" onClick={() => changePage('smoothie')}>Mon Smoothie</a> : null}
    </div>

    <div className="columns">
      <div className="column  is-12">
        {page === 'blender' ? (
          <div>
            <div className="column is-6 is-offset-3">
              <img src="https://img11.hostingpics.net/pics/268136header.png" alt="header" />
            </div>
            <FormContainer />
          </div>
        ) : null}
      </div>
    </div>
    {page === 'smoothie' ? <SmoothieContainer /> : null}
  </div>
);

const mapStateToProps = ({ page }) => ({
  page,
});

const mapDispatchToProps = dispatch => ({
  changePage: (page) => { dispatch(changePageAction(page)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
