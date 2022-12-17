import calculator from '../codes/calculator';

test('add(4,2) is 6', () => {
    expect(calculator.add(4,2)).toBe(6);
});

test('sub(4,2) is 2', () => {
    expect(calculator.sub(4,2)).toBe(2);
});

test('multiply(4,2) is 8', () => {
    expect(calculator.multiply(4,2)).toBe(8);
});

test('divide(4,2) is 2', () => {
    expect(calculator.divide(4,2)).toBe(2);
});