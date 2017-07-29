import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import FormContainer from './blender/blender.component';
import SmoothieContainer from './smoothie/smoothie.component';
import 'bulma/css/bulma.css';

const App = ({ smoothie }) => (
  <div className="App">
    <div className="App-header">
      <h1>Choisissez les ingrédients de vos smoothies</h1>
      <h2>et laissez-nous vous proposer un BlendWebMix sur mesure...</h2>
    </div>
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
