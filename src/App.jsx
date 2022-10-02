import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

  const [color, setColor] = useState("#886");

  function getColor () {
    let newDigits = digits.join("");
    const color = `#${newDigits}`;
    console.log(newDigits)
    console.log(color);
  };

  useEffect(() => {
    getColor();
  }, []);

  return (
    <div className='container'>
      <div className='box' style={{ background: color }}></div>
      <div className='buttons'>
        <button className='cra'></button>
        <button className='cra'></button>
        <button className='cra'></button>
      </div>
    </div>
  )
}

export default App;