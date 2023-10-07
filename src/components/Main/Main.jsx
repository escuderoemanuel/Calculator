import { Button } from './Button/Button';
import { Clear } from './Clear/Clear';
import { Display } from './Display/Display';
import './Main.css';
import { useState } from 'react';

export const Main = () => {
  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(`${input}${value}`);
  };

  return (
    <section className='main'>
      <div className='contenedorCalculadora'>
        <div className='calculadora'>
          <div className='display'>
            <Display input={input} />
          </div>
          <div className='row'>
            <Clear>Clear</Clear>
            <Button>÷</Button>
          </div>
          <div className='row'>
            <Button onClick={addInput}>7</Button>
            <Button onClick={addInput}>8</Button>
            <Button onClick={addInput}>9</Button>
            <Button onClick={addInput}>×</Button>
          </div>
          <div className='row'>
            <Button onClick={addInput}>4</Button>
            <Button onClick={addInput}>5</Button>
            <Button onClick={addInput}>6</Button>
            <Button onClick={addInput}>-</Button>
          </div>
          <div className='row'>
            <Button onClick={addInput}>1</Button>
            <Button onClick={addInput}>2</Button>
            <Button onClick={addInput}>3</Button>
            <Button onClick={addInput}>+</Button>
          </div>
          <div className='row'>
            <Button onClick={addInput}>0</Button>
            <Button onClick={addInput}>.</Button>
            <Button onClick={addInput}>=</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
