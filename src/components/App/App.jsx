import React, { Component } from 'react';
import './App.css';
import FormContainer from '../Form/FormContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Personnaliser votre Blend</h2>
        </div>
        <FormContainer />
      </div>
    );
  }
}

export default App;
