import './Display.css';

export const Display = ({ input, result }) => {
  return (
    <>
      <div className='input'>
        <span
          className={`inputNumbers${
            input.length > 10 && input.length < 15 ? 'md' : ''
          } ${input.length >= 15 ? 'sm' : ''}`.trim()}>
          {input}
        </span>
        <span className='result'>{result}</span>
      </div>
    </>
  );
};
