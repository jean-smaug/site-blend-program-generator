import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import './index.css';
import FormContainer from './blender/blender.component';
import SmoothieContainer from './smoothie/smoothie.component';
import { removeConferences } from './smoothie/smoothie.action';

export const App = ({ smoothie, removeConferencesFromState }) => (
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

      {!_.isEmpty(smoothie.dayOne) && !_.isEmpty(smoothie.dayTwo) ? (
        <div className="div-remix column is-2">
          <input
            className="btn-remix"
            type="button"
            value="Remix"
            onClick={removeConferencesFromState}
          />{' '}
        </div>
      ) : null}
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
    <div className="columns">
      <div className="column  is-12">
        {!_.isEmpty(smoothie.dayOne) && !_.isEmpty(smoothie.dayTwo) ? (
          <div>
            <div className="columns">
              <div className="column is-12">
                <SmoothieContainer />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

App.propTypes = {
  smoothie: SmoothieContainer.propTypes.isRequired,
  removeConferencesFromState: PropTypes.func.isRequired,
};

const mapStateToProps = ({ smoothie }) => ({
  smoothie,
});

const mapDispatchToProps = dispatch => ({
  removeConferencesFromState: () => {
    dispatch(removeConferences());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
