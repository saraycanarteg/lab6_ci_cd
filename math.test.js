const { factorial, fibonacci } = require('./math');

test('Factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
});

test('Factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
});

test('Fibonacci de 0 debe ser 0', () => {
    expect(fibonacci(0)).toBe(0);
});

test('Fibonacci de 7 debe ser 13', () => {
    expect(fibonacci(7)).toBe(13);
});