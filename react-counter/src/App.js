import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Aplikacja React</h1>
       <Counter initValue="0" label="Licznik" />




       <Counter initValue="10" label="Duzy licznik" />
      </header>
    </div>
  );
}

export default App;
