import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import FormContainer from '../Form/FormContainer';
import SmoothieContainer from '../Smoothie/SmoothieContainer';

const App = ({ smoothie }) => (
  <div className="App">
    <div className="App-header">
      <h2>Personnaliser votre Blend</h2>
    </div>
    <FormContainer />
    {console.log(smoothie)}
    {smoothie.length !== undefined ? <SmoothieContainer /> : null}
  </div>
);

const mapStateToProps = state => ({
  smoothie: state.smoothie,
});

export default connect(mapStateToProps)(App);
