import './Button.css';

export const Button = (props) => {
  const isOperator = (value) => {
    return isNaN(value) && value != '.' && value != '0';
  };

  const equal = (value) => {
    return value === '=';
  };

  const clear = (value) => {
    return value === 'Clear';
  };

  return (
    <div
      className={`btn ${isOperator(props.children) ? 'operator' : ''} ${
        equal(props.children) ? 'equal' : ''
      } ${clear(props.children) ? 'clear' : ''}`.trim()}
      onClick={() => props.onClick(props.children)}>
      {props.children}
    </div>
  );
};
