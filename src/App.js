import React from 'react';
import TideList from './components/TideList.js';
import './App.css';

function App() {
  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const dateToYMD = (date) =>
    date.getFullYear().toString() +
    (1 === (date.getMonth()+1).toString().length ? '0' : '')+
    (date.getMonth()+1).toString() +
    date.getDate().toString();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tide List</h1>
        <TideList
          beginDate={dateToYMD(today)}
          endDate={dateToYMD(tomorrow)}
          station="8536110"
        />
      </header>
    </div>
  );
}

export default App;
