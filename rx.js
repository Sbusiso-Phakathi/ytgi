function divide(a, b) {
  // Check if values are provided
  if (a === undefined || b === undefined) {
    return "Error: Both numbers must be provided.";
  }

  // Check that both inputs are actually numbers
  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    return "Error: Both inputs must be valid numbers.";
  }

  // Prevent division by zero
  if (b === 0) {
    return "Error: Cannot divide by zero.";
  }

  // Return the result
  return a / b;
}
