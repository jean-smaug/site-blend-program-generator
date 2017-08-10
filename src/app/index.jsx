import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import 'bulma/css/bulma.css';
import './index.css';
import FormContainer from './blender/blender.component';
import SmoothieContainer from './smoothie/smoothie.component';
import { removeConferences } from './smoothie/smoothie.action';

export const App = ({ smoothie, removeConferences }) =>
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
              onClick={removeConferences}
            />{' '}
            <SmoothieContainer />
          </div>
          : null}
      </div>
    </div>
  </div>);

App.propTypes = {
  smoothie: SmoothieContainer.propTypes.isRequired,
};

const mapStateToProps = state => ({
  smoothie: state.smoothie,
});

const mapDispatchToProps = dispatch => ({
  removeConferences: () => {
    dispatch(removeConferences());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
