import './Clear.css';
export const Clear = (props) => {
  return (
    <div className='clear' onClick={props.handleClick}>
      {props.children}
    </div>
  );
};
