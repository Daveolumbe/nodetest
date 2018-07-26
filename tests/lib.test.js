const lib = require('../lib');

test('absolute - should return positive number if input is +ve', () => {
    const result = lib.abosulte(1);

    expect(result).toBe(1);
});

test('absolute - should return negative number if input is -ve', () => {
    const result = lib.abosulte(-1);

    expect(result).toBe(-1);
});