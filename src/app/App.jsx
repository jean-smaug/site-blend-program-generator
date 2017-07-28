import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import FormContainer from './Blender/BlenderContainer';
import SmoothieContainer from './smoothie/smoothie.component';

const App = ({ smoothie }) => (
  <div className="App">
    <div className="App-header">
      <h1>Choisissez les ingrédients de vos smoothies</h1>
      <h2>et laissez-nous vous proposer un BlendWebMix sur mesure...</h2>
    </div>
    <FormContainer />
    {smoothie.conferences.length !== 0 ? <SmoothieContainer /> : null}
  </div>
);

App.propTypes = {
  smoothie: SmoothieContainer.propTypes.isRequired,
};

const mapStateToProps = state => ({
  smoothie: state.smoothie,
});

export default connect(mapStateToProps)(App);
