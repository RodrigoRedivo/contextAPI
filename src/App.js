import React from 'react';
import './App.css';
import Header from './Components/Header';
import Counter from './Components/Counter';
import {CounterProvider} from './CounterContext';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Header></Header>
        <Counter></Counter> 
      </CounterProvider>
    </div>
  );
}

export default App;
