import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount () {
    console.log(this.props.state.form);
    this.props.addMotClef("testaha");

  }

  render() {
    console.log(this.props.state.form);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to blend</h2>
        </div>
      </div>
    );
  }
}

export default App;
