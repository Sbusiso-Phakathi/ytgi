
/**
 * Adds two numbers and returns their sum.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 * @throws {TypeError} If either argument is not a valid number.
 */
function addNumbers(a, b) {
  
    if (a == null || b == null) {
    return "Error: Both numbers must be provided.";
  }
  
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    throw new TypeError('Both arguments must be valid numbers.');
  }

  return a + b;
}
