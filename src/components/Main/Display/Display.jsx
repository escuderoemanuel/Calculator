import './Display.css';

export const Display = ({ input }) => {
  console.log(input.length);
  return (
    <div
      className={`input 
      ${input.length > 10 ? 'md' : ''} ${input.length > 15 ? 'sm' : ''}`}>
      {input}
    </div>
  );
};
