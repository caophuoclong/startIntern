import logo from './logo.svg';
import './App.css';
import Db from './createDB';
import React, { useEffect } from 'react';
import '@babel/polyfill';

function App() {
  useEffect(()=>{
    Db();
  },[])
  return (
    <div className="App">
      <header className="App-header">
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
