import React from 'react';
import logo from './logo.svg';
import TideList from './components/TideList.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TideList
          beginDate="20200522"
          endDate="20200721"
          station="8536110"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
