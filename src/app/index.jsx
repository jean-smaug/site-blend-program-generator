// @flow

import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import 'bulma/css/bulma.css';
import './index.css';
import FormContainer from './blender/blender.component';
import SmoothieContainer from './smoothie/smoothie.component';

export const App = ({ smoothie }: { smoothie: Object }) => (
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

export default connect(mapStateToProps, null)(App);
