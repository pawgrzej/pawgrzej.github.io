import React from 'react';
import logo from './logo.svg';
import Cryptoparent from './Component/cryptoparent'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
   <p>Crypto Rate</p>
      </header>
      <Cryptoparent/>
    </div>
  );
}

export default App;
