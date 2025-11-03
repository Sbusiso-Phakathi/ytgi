
function difference(a, b) {
  if (a == null || b == null) {
    return "Error: Both numbers must be provided.";
  }

  if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
    return "Error: Both inputs must be valid numbers.";
  }

  return a - b;
}
