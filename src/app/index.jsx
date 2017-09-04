import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import './index.css';
import FormContainer from './blender/blender.component';
import SmoothieContainer from './smoothie/smoothie.component';
import { removeConferences } from './smoothie/smoothie.action';

export const App = ({ smoothie, removeConferencesFromState }) =>
  (<div className="App">
    <div className="header">
      <img src="http://www.blendwebmix.com/wp-content/uploads/2017/04/Blend-Web-Mix-2-1-e1492005334702.png" width="145" height="45" alt="BlendWebMix 2017" />
    </div>
    <div className="columns">
      <div className="column  is-12">
        {_.isEmpty(smoothie.dayOne) && _.isEmpty(smoothie.dayTwo) ? <FormContainer /> : null}
      </div>
    </div>
    <div className="columns">
      <div className="column  is-12">
        {!_.isEmpty(smoothie.dayOne) && !_.isEmpty(smoothie.dayTwo)
          ? <div>
            <div className="columns">
              <div className="div-remix column is-2">
                <input
                 className="btn-remix"
                  type="button"
                  value="Remix"
                  onClick={removeConferencesFromState}
                />{' '}
              </div>
              <div className="column is-12">
                <SmoothieContainer />
              </div>
            </div>
          </div>
          : null}
      </div>
    </div>
  </div>);

App.propTypes = {
  smoothie: SmoothieContainer.propTypes.isRequired,
  removeConferencesFromState: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  smoothie: state.smoothie,
});

const mapDispatchToProps = dispatch => ({
  removeConferencesFromState: () => {
    dispatch(removeConferences());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
