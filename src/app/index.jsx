import React from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import './index.css';
import FormContainer from './blender/blender.component';
import SmoothieContainer from './smoothie/smoothie.component';

export const App = ({ smoothie }) => (
  <div className="App">
    <div className="columns">
      <div className="column">
        <FormContainer />
      </div>
    </div>
    <div className="columns">
      <div className="column">
        {smoothie.conferences.length !== 0 ? <SmoothieContainer /> : null}
      </div>
    </div>
  </div>
);

App.propTypes = {
  smoothie: SmoothieContainer.propTypes.isRequired,
};

const mapStateToProps = state => ({
  smoothie: state.smoothie,
});

export default connect(mapStateToProps)(App);
