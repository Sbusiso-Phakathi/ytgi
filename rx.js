/**
 * Adds two numbers together with input validation.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The sum of the two numbers, or an error message
 *                          if inputs are invalid.
 */
function add(a, b) {
  // Check if either input is missing (undefined or null)
  if (a == null || b == null) {
    return "Error: Both numbers must be provided.";
  }

  // Ensure both inputs are valid numbers
  // Number.isNaN() checks specifically for NaN values
  if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
    return "Error: Both inputs must be valid numbers.";
  }

  // If all checks pass, return the result of the addition
  return a + b;
}
