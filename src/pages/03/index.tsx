import React, { useState } from "react";
import {Header} from "@/components/header"


export default function calculator(){
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState(''); 

  const bClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } 
      catch (error) {
        setResult('エラー');
      }
    } 
    else if (value === 'C') {
      setInput('');
      setResult('');
    } 
    else {
      setInput((prevInput) => prevInput + value);
    }
  }

  return(
    <>
    <Header title="oreo"/>
      <div>
        <div className="calculator">
          <div className="display">
            <input type="text" value={input} readOnly />
          </div>
          <div className="buttons">
            <button onClick={() => bClick('9')}>9</button>
            <button onClick={() => bClick('8')}>8</button>
            <button onClick={() => bClick('7')}>7</button>
            <button onClick={() => bClick('6')}>6</button>
            <button onClick={() => bClick('5')}>5</button>
            <button onClick={() => bClick('4')}>4</button>
            <button onClick={() => bClick('3')}>3</button>
            <button onClick={() => bClick('2')}>2</button>
            <button onClick={() => bClick('1')}>1</button>
            <button onClick={() => bClick('0')}>0</button>
            <button onClick={() => bClick('+')}>+</button>
            <button onClick={() => bClick('-')}>-</button>
            <button onClick={() => bClick('*')}>*</button>
            <button onClick={() => bClick('/')}>/</button>
            <button onClick={() => bClick('.')}>.</button>
            <button onClick={() => bClick('=')}>=</button>
            <button onClick={() => bClick('C')}>C</button>
          </div>
        </div>
        <p>Result: {result}</p>
      </div>
    </>
  )
}