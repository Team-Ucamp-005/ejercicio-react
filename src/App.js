import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Component from './components/Component/Component';
import Hello from './components/Hello/Hello';
import InputText from './components/InputText/InputText';
import ColorInput from './components/ColorInput/ColorInput';
import InputSize from './components/InputSize/InputSize';




function App() {

  const [text, setText] = useState('hola')
  const [color, setColor] = useState('#000000')
  const [size, setSize] = useState('16')

  return (
    <div className="App">
      {/* <Component />
      <Hello name="Fredo" /> */}

      {/* <h1 style={{
        color: color,
        fontSize: `${size}px`
      }}>
        {text}
        {
          console.log(size)
        }
      </h1>
      <p>color de texto</p>
      <ColorInput colorValue={setColor} />
      <p>Tamaño de texto</p>
      <InputSize sizeValue={setSize} />
      <p >Texto</p>
      <InputText textValue={setText} /> */}

    </div>
  );
}

export default App;
