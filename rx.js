function divide(a, b) {
  if (a === undefined || b === undefined) {
    return "Error: Both numbers must be provided.";
  }

  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    return "Error: Both inputs must be valid numbers.";
  }

  if (b === 0) {
    return "Error: Cannot divide by zero.";
  }

  return a / b;
}
