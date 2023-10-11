// Add function
export function add(...numbers) {
  const finalRessult = numbers.reduce((result, number) => result + number, 0);
  return finalRessult.toFixed(2);
}

// Subtraction function
export function subtraction(...numbers) {
  if (numbers.length >= 2) {
    const finalRessult = numbers.reduce((result, number) => result - number);
    return finalRessult.toFixed(2);
  } else {
    const finalRessult = numbers.reduce((result, number) => result - 0);
    return finalRessult.toFixed(2);
  }
}

// Division function
export function division(...numbers) {
  if (numbers.length >= 2) {
    const finalRessult = numbers.reduce((result, number) => result / number);
    return finalRessult.toFixed(2);
  } else if (numbers.includes(0)) {
    return 'You cannot calculate the division with zero';
  } else {
    return 'Invalid Operation';
  }
}

// Multiplication function
export function multiplication(...numbers) {
  const finalRessult = numbers.reduce((result, number) => result * number);
  return finalRessult.toFixed(2);
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
  const finalRessult = restNumbers.reduce(
    (result, number) => rest % number,
    firstNumber
  );
  return finalRessult.toFixed(2);
}

// Percentage function
function percentage(number, percentage) {
  const finalRessult = (number * percentage) / 100;
  return finalRessult.toFixed(2);
}

// Change Sign function
export function changeSign() {
  let initialValue = parseFloat(display.value);
  if (!isNaN(initialValue)) {
    initialValue *= -1;
    display.value = newValue;
  }
}
