import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import CSSTransition from 'react-transition-group/CSSTransition';
import './index.css';
import FormContainer from './blender/blender.component';
import SmoothieContainer from './smoothie/smoothie.component';
import { removeConferences } from './smoothie/smoothie.action';

export const App = ({ smoothie, removeConferencesFromState }) =>
  (<div className="App">
    <div className="columns">
      <div className="column">
        {_.isEmpty(smoothie.dayOne) && _.isEmpty(smoothie.dayTwo) ? <FormContainer /> : null}
      </div>
    </div>
    <div className="columns">
      <div className="column">
        {!_.isEmpty(smoothie.dayOne) && !_.isEmpty(smoothie.dayTwo)
          ? <div>
            <input
              style={{
                height: '100px',
                width: '100px',
                borderRadius: '50%',
                boxShadow: '2px 2px 8px #aaa',
                backgroundColor: '#E6421D',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2em',
              }}
              type="button"
              value="Remix"
              onClick={removeConferencesFromState}
            />{' '}
            <SmoothieContainer />
          </div>
          : null}
      </div>
    </div>
    <FormContainer />
    <CSSTransition in={smoothie.conferences.length !== 0} timeout={500} classNames="smoothie">
      <div key="transition-group-content">
        {smoothie.conferences.length !== 0 ? <SmoothieContainer /> : ''}
      </div>
    </CSSTransition>
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
