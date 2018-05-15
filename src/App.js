import React, { Component } from 'react';
import CallApi from './components/Call-api';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Components Collection</h1>
        </header>
        <CallApi />
      </div>
    );
  }
}

export default App;
