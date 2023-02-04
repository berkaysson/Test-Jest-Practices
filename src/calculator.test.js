import Calculator from "./calculator";

test('Adds 15, 4', () => {
    expect(Calculator.sum(15, 4)).toBe(19);
});

test('Adds -5.5, 6.5', () => {
    expect(Calculator.sum(-5.5, 6.5)).toBe(1);
});

test('Subtracts 20, 4', () => {
    expect(Calculator.subtract(20, 4)).toBe(16);
});

test('Subtracts 2.5, 3.4', () => {
    expect(Calculator.subtract(2.5, 3.4)).toBe(-0.9);
});

test('Divides 10, 2', () => {
    expect(Calculator.divide(10, 2)).toBe(5);
});

test('Divides 10, 3', () => {
    expect(Calculator.divide(10, 3)).toBe(3.33);
});

test('Divides 12.3, 2.5', () => {
    expect(Calculator.divide(12.3, 2.5)).toBe(4.92);
});

test('Divides 3, 0', () => {
    expect(Calculator.divide(3, 0)).toBe('Cannot divide by zero.');
});

test('Divides 0, 3', () => {
    expect(Calculator.divide(0, 3)).toBe(0);
});

test('Multiplies 10, 3', () => {
    expect(Calculator.multiply(10, 3)).toBe(30);
});

test('Multiplies 10, 0', () => {
    expect(Calculator.multiply(10, 0)).toBe(0);
});

test('Multiplies null, 0', () => {
    expect(Calculator.multiply(null, 0)).toBe('Invalid values.');
});