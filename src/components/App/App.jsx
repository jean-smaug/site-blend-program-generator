import React from 'react';
import './App.css';
import FormContainer from '../Form/FormContainer';
import MenuContainer from '../Menu/MenuContainer';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h2>Personnaliser votre Blend</h2>
    </div>
    <FormContainer />
    <MenuContainer />
  </div>
);

export default App;
