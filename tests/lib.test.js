const lib = require('../lib');


describe('abosulte', () => {
it('should return positive number if input is +ve', () => {
    const result = lib.abosulte(1);
    expect(result).toBe(1);
});

it('should return positive number if input is +ve', () => {
    const result = lib.abosulte(-1);
    expect(result).toBe(1);
});

it('should return zero number if input is zero', () => {
    const result = lib.abosulte(0);
    expect(result).toBe(0);
});  
});


describe('greet', () => {
    it('should return the greeting message', () => {
        const result = lib.greet('Mosh');
        expect(result).toMatch(/Mosh/);
    });
});