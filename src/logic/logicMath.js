// Add function
export function add(...numbers) {
  return numbers.reduce((result, number) => result + number, 0);
}

// Subtraction function
export function subtraction(...numbers) {
  if (numbers.length > 2) {
    return numbers.reduce((result, number) => result - number);
  } else {
    return numbers.reduce((result, number) => result - 0);
  }
}

// Division function
function division(...numbers) {
  if (numbers.length > 2) {
    return numbers.reduce((result, number) => result / number);
  } else if (numbers.includes(0)) {
    return 'Invalid Operation';
  } else {
    return 'You cannot calculate the division with zero';
  }
}

// Multiplication function
function multiplication(...numbers) {
  return numbers.reduce((result, number) => result * number);
}

// Resto function
function rest(...numbers) {
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
function changeSign() {
  let initialValue = parseFloat(display.value);
  if (!isNaN(initialValue)) {
    initialValue *= -1;
    display.value = newValue;
  }
}
