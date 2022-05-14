import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Component from './components/Component/Component';
import Hello from './components/Hello/Hello';
import InputText from './components/InputText/InputText';
import ColorInput from './components/ColorInput/ColorInput';

function App() {

  const [text, setText] = useState('hola')
  const [color, setColor] = useState('#000000')

  return (
    <div className="App">
      {/* <Component />
      <Hello name="Fredo" /> */}

      <h1 style={{
        color: color
      }} >
        {text}
      </h1>

      <ColorInput colorValue={setColor} />
      <InputText textValue={setText} />

    </div>
  );
}

export default App;
