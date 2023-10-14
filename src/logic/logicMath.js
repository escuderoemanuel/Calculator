// Add function
export function add(...numbers) {
  const finalResult = numbers.reduce((result, number) => result + number, 0);
  return Number.isInteger(finalResult) ? finalResult : finalResult.toFixed(2);
}

// Subtraction function
export function subtraction(...numbers) {
  if (numbers.length >= 2) {
    const finalResult = numbers.reduce((result, number) => result - number);
    return Number.isInteger(finalResult) ? finalResult : finalResult.toFixed(2);
  } else {
    const finalResult = numbers.reduce((result, number) => result - 0);
    return Number.isInteger(finalResult) ? finalResult : finalResult.toFixed(2);
  }
}

// Division function
export function division(...numbers) {
  if (numbers.length >= 2) {
    const finalResult = numbers.reduce((result, number) => result / number);
    return Number.isInteger(finalResult) ? finalResult : finalResult.toFixed(2);
  } else if (numbers.includes(0)) {
    return 'You cannot calculate the division with zero';
  } else {
    return 'Invalid Operation';
  }
}

// Multiplication function
export function multiplication(...numbers) {
  const finalResult = numbers.reduce((result, number) => result * number);
  return Number.isInteger(finalResult) ? finalResult : finalResult.toFixed(2);
}

// Percentage function
export function percentage(number, percentage) {
  const finalResult = (number * percentage) / 100;
  return Number.isInteger(finalResult) ? finalResult : finalResult.toFixed(2);
}

// Change Sign function
export function changeSign() {
  let initialValue = parseFloat(display.value);
  if (!isNaN(initialValue)) {
    initialValue *= -1;
    display.value = newValue;
  }
}

//  Recoil Btn
export function recoil(numbers) {
  return numbers.slice(0, -1);
}
