import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';

function App() {

  let [number, setNumber] = useState(45);

  return (
    <div className="App">
      Hello World
      <Parent num={number} />
      <button onClick={() => { setNumber(++number) }}>Update Value</button>
    </div >
  )
}

export default App;