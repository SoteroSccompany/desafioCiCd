

const index = require('./index');

test('Check 4 is prime', () => {
    expect(index(4)).toBe(false);
});

test('Check 5 is prime', () => {
    expect(index(5)).toBe(true);
});