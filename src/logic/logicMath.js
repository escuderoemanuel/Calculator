// Add function
export function add(...numbers) {
  return numbers.reduce((result, number) => result + number, 0);
}

// Subtraction function
export function subtraction(...numbers) {
  if (numbers.length >= 2) {
    return numbers.reduce((result, number) => result - number);
  } else {
    return numbers.reduce((result, number) => result - 0);
  }
}

// Division function
export function division(...numbers) {
  if (numbers.length >= 2) {
    return numbers.reduce((result, number) => result / number);
  } else if (numbers.includes(0)) {
    return 'You cannot calculate the division with zero';
  } else {
    return 'Invalid Operation';
  }
}

// Multiplication function
export function multiplication(...numbers) {
  return numbers.reduce((result, number) => result * number);
}

// Resto function
export function rest(...numbers) {
  if (numbers.length < 2) {
    return 'Two numbers are required to calculate the remainder.';
  }
  if (numbers.includes(0)) {
    return 'You cannot calculate the remainder with zero.';
  }
  const [firstNumber, ...restNumbers] = numbers;
  return restNumbers.reduce((result, number) => rest % number, firstNumber);
}

// Percentage function
function percentage(number, percentage) {
  return (number * percentage) / 100;
}

// Change Sign function
export function changeSign() {
  let initialValue = parseFloat(display.value);
  if (!isNaN(initialValue)) {
    initialValue *= -1;
    display.value = newValue;
  }
}

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
      } else if (operator === '×') {
        result = multiplication(result, nextNumber);
      } else if (operator === '÷') {
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
