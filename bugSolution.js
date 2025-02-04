function foo(a, b) {
  if (a === 0 && b === 0) {
    return NaN; //or throw new Error('Cannot divide zero by zero');
  } else if (b === 0) {
    return Infinity; //or throw new Error('Cannot divide by zero');
  } else if (a === 0) {
      return 0;
  }
  return a / b;
}