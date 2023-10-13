import './Button.css';

export const Button = (props) => {
  const isOperator = (value) => {
    return isNaN(value) && value != '.' && value != '0' && value != '%';
  };

  const equal = (value) => {
    return value === '=';
  };

  const clear = (value) => {
    return value === 'Clear';
  };

  const isPercent = (value) => {
    return value === '%';
  };

  return (
    <div
      className={`btn ${isPercent(props.children) ? 'btnPercent' : ''}
      ${isOperator(props.children) ? 'operator' : ''} ${
        equal(props.children) ? 'equal' : ''
      } ${clear(props.children) ? 'clear' : ''}`.trim()}
      onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  );
};
