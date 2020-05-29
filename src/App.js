import React from 'react';
import TideList from './components/TideList.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tide List</h1>
        <TideList
          beginDate="20200522"
          endDate="20200721"
          station="8536110"
        />
      </header>
    </div>
  );
}

export default App;
