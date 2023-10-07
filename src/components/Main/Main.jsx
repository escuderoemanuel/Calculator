import { Button } from './Button/Button';
import { Clear } from './Clear/Clear';
import { Display } from './Display/Display';
import './Main.css';

export const Main = () => {
  return (
    <section className='main'>
      <div className='contenedorCalculadora'>
        <div className='calculadora'>
          <div className='display'>
            <Display></Display>
          </div>
          <div className='row'>
            <Clear></Clear>
            <Button>÷</Button>
          </div>
          <div className='row'>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>×</Button>
          </div>
          <div className='row'>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
          </div>
          <div className='row'>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className='row'>
            <Button>0</Button>
            <Button>.</Button>
            <Button>=</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
