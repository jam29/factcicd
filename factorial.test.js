// factorial.test.js
const factorial = require('./factorial');

test('factorial of 5 should be 120', () => {
    expect(factorial(5)).toBe(120);
});

test('factorial of 4 should be 24', () => {
  expect(factorial(4)).toBe(24);
});

test('factorial of 3 should be 6', () => {
    expect(factorial(3)).toBe(6);
  });

test('factorial of 0 should be 1', () => {
    expect(factorial(0)).toBe(1);
});

test('factorial of negative numbers should be -1', () => {
    expect(factorial(-5)).toBe(-1);
});



