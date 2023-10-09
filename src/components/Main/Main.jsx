import { Button } from './Button/Button';
import { Clear } from './Clear/Clear';
import { Display } from './Display/Display';
import './Main.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import {
  add,
  subtraction,
  multiplication,
  division,
} from '../../logic/logicMath';

export const Main = () => {
  /* Initial State of Display Input */
  const [input, setInput] = useState('');

  /* Initial State of Display Result */
  const [result, setResult] = useState(0);

  // Add Input on Display
  const addInput = (value) => {
    setInput(`${input}${value}`);
  };

  // Clear Button
  const clearDisplay = () => {
    setInput('');
    setResult(0);
  };

  /* // Equal Fn
  const equalFn = () => {
    if (input) {
      const operation = evaluate(input);
      //setInput(evaluate(input));
      setResult(operation);
    } else {
      alert('Ingresa un valor');
    }
  }; */

  // Importa o define todas las funciones de operaciones matemáticas aquí

  // Función equalFn para realizar operaciones matemáticas
  const equalFn = () => {
    if (input) {
      const parts = input.split(/([\+\-\*\/])/); // Divide la entrada en números y operadores
      const numbers = [];
      const operators = [];

      // Separa los números y operadores
      for (let part of parts) {
        part = part.trim();
        if (part === '+' || part === '-' || part === '*' || part === '/') {
          operators.push(part);
        } else if (part !== '') {
          numbers.push(parseFloat(part));
        }
      }

      if (numbers.length === 0 || operators.length === 0) {
        alert('Entrada no válida');
        return;
      }

      // Realiza las operaciones matemáticas
      let result = numbers[0];

      for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = numbers[i + 1];

        if (operator === '+') {
          result = add(result, nextNumber);
        } else if (operator === '-') {
          result = subtraction(result, nextNumber);
        } else if (operator === '*') {
          result = multiplication(result, nextNumber);
        } else if (operator === '/') {
          result = division(result, nextNumber);
          if (
            result === 'Invalid Operation' ||
            result === 'You cannot calculate the division with zero'
          ) {
            alert(result);
            return;
          }
        }
      }

      setResult(result);
    } else {
      alert('Ingresa un valor');
    }
  };

  return (
    <section className='main'>
      <div className='contenedorCalculadora'>
        <div className='calculadora'>
          <div className='display'>
            <Display input={input} result={result} />
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
