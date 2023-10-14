// Add function
export function add(...numbers) {
  const finalResult = numbers.reduce((result, number) => {
    if (isNaN(number)) {
      return;
    } else {
      return result + number;
    }
  }, 0);
  return Number.isInteger(finalResult) ? finalResult : finalResult.toFixed(2);
}

// Subtraction function
export function subtraction(...numbers) {
  const finalResult = numbers.reduce((result, number) => {
    if (isNaN(number)) {
      return;
    } else {
      return result - number;
    }
  });
  return Number.isInteger(finalResult) ? finalResult : finalResult.toFixed(2);
}

// Division function
export function division(...numbers) {
  const finalResult = numbers.reduce((result, number) => {
    if (isNaN(number)) {
      return;
    } else {
      return result / number;
    }
  });
  return Number.isInteger(finalResult) ? finalResult : finalResult.toFixed(2);
}

// Multiplication function
export function multiplication(...numbers) {
  const finalResult = numbers.reduce((result, number) => {
    if (isNaN(number)) {
      return;
    } else {
      return result * number;
    }
  });
  return Number.isInteger(finalResult) ? finalResult : finalResult.toFixed(2);
}

// Percentage function
/* export function percentage(number, percentage) {
  const finalResult = (number * percentage) / 100;
  return Number.isInteger(finalResult) ? finalResult : finalResult.toFixed(2);
} */
export function percentage(number, percentage) {
  if (isNaN(percentage)) {
    return 0;
  } else {
    const finalResult = (number * percentage) / 100;
    return Number.isInteger(finalResult) ? finalResult : finalResult.toFixed(2);
  }
}

// Change Sign function
/* export function change(number) {
  if (typeof number === 'number') {
    return (number *= -1); // Change sign
  } else {
    return number; // Retorn initial value
  }
} */
/* export function change(number) {
  return (number *= -1); // Change sign
} */

//  Recoil Btn
export function recoil(numbers) {
  return numbers.slice(0, -1);
}
