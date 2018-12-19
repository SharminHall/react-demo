import React, { Component } from 'react';
import './App.css';
import StopWatch from './components/StopWatch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StopWatch></StopWatch>
        </header>
      </div>
    )
  }
}

export default App;
