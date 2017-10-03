// @flow

/* eslint-disable max-len */

import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import 'bulma/css/bulma.css';
import './index.css';
import FormContainer from './blender/blender.component';
import SmoothieContainer from './smoothie/smoothie.component';
import { removeConferences } from './smoothie/smoothie.action';


export const App = ({ smoothie, removeConferencesFromState }: { smoothie: Object, removeConferencesFromState: () => void }) => (
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
      {!_.isEmpty(smoothie.dayOne) && !_.isEmpty(smoothie.dayTwo) ?
        <a className="button is-danger is-outlined remix" role="presentation" onClick={() => removeConferencesFromState()}>Remix</a> : null}
    </div>

    <div className="columns">
      <div className="column  is-12">
        {_.isEmpty(smoothie.dayOne) && _.isEmpty(smoothie.dayTwo) ? (
          <div>
            <div className="column is-6 is-offset-3">
              <img src="https://img11.hostingpics.net/pics/268136header.png" alt="header" />
            </div>
            <FormContainer />
          </div>
        ) : null}
      </div>
    </div>
    {!_.isEmpty(smoothie.dayOne) && !_.isEmpty(smoothie.dayTwo) ? <SmoothieContainer /> : null}
  </div>
);

const mapStateToProps = ({ smoothie }) => ({
  smoothie,
});

const mapDispatchToProps = dispatch => ({
  removeConferencesFromState: () => {
    dispatch(removeConferences());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
