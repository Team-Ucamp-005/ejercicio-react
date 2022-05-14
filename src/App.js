import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Component from './components/Component/Component';
import Hello from './components/Hello/Hello';
import InputText from './components/InputText/InputText';

function App() {

  const [text, setText] = useState('hola')
  const [color, setColor] = useState('black')

  return (
    <div className="App">
      {/* <Component />
      <Hello name="Fredo" /> */}

      <h1 style={{
        backgroundColor: color
      }} >
        {text}
      </h1>
      <InputText textValue={setText} />

    </div>
  );
}

export default App;
