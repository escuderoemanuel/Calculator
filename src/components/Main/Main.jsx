import { Button } from './Button/Button';
import { Clear } from './Clear/Clear';
import { Display } from './Display/Display';
import './Main.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';

export const Main = () => {
  /* Initial State of Display Input */
  const [input, setInput] = useState('');

  // Add Input on Display
  const addInput = (value) => {
    setInput(`${input}${value}`);
  };

  // Clear Button
  const clearDisplay = () => {
    setInput('');
  };

  // Equal Fn
  const equalFn = () => {
    setInput(evaluate(input));
  };

  return (
    <section className='main'>
      <div className='contenedorCalculadora'>
        <div className='calculadora'>
          <div className='display'>
            <Display input={input} />
          </div>
          <div className='row'>
            <Clear handleClick={clearDisplay}>Clear</Clear>
            <Button handleClick={addInput}>/</Button>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>7</Button>
            <Button handleClick={addInput}>8</Button>
            <Button handleClick={addInput}>9</Button>
            <Button handleClick={addInput}>*</Button>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>4</Button>
            <Button handleClick={addInput}>5</Button>
            <Button handleClick={addInput}>6</Button>
            <Button handleClick={addInput}>-</Button>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>1</Button>
            <Button handleClick={addInput}>2</Button>
            <Button handleClick={addInput}>3</Button>
            <Button handleClick={addInput}>+</Button>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>0</Button>
            <Button handleClick={addInput}>.</Button>
            <Button handleClick={equalFn}>=</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
