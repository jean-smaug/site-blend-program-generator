import React from 'react';
import './App.css';
import FormContainer from '../Form/FormContainer';
import SmoothieContainer from '../Smoothie/SmoothieContainer';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h2>Personnaliser votre Blend</h2>
    </div>
    <FormContainer />
    <SmoothieContainer />
  </div>
);

export default App;
