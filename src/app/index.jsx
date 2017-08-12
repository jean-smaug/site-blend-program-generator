import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import 'bulma/css/bulma.css';
import CSSTransition from 'react-transition-group/CSSTransition';
import './index.css';
import FormContainer from './blender/blender.component';
import SmoothieContainer from './smoothie/smoothie.component';

export const App = ({ smoothie }) =>
  (<div className="App">
    <div className="columns">
      <div className="column">
        <CSSTransition
          in={!_.isEmpty(smoothie.dayOne) && !_.isEmpty(smoothie.dayTwo)}
          timeout={1500}
          classNames="smoothie"
        >
          <div key="transition-group-content">
            <SmoothieContainer />
          </div>
        </CSSTransition>
      </div>
      <FormContainer />
    </div>
  </div>);

const mapStateToProps = state => ({
  smoothie: state.smoothie,
});

export default connect(mapStateToProps)(App);
