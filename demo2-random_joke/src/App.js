import React, { Component } from 'react';
import './App.css';
import RandomJoke from './components/RandomJoke'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RandomJoke></RandomJoke>
        </header>
      </div>
    );
  }
}

export default App;
