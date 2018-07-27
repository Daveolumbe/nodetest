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


describe('getCurrency', () => {
    it('should return the supported currencies', () => {
        const result = lib.getCurrencies();
        //Too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        // Too specific
        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('GBP');
        expect(result[2]).toBe('EUR');
        expect(result.length).toBe(3);

        // Proper way
        expect(result).toContain('USD');
        expect(result).toContain('GBP');
        expect(result).toContain('EUR');

        // Ideal way
        expect(result).toEqual(expect.arrayContaining(['GBP', 'EUR', 'USD']));

    });
});

describe('getProduct', () => {
    it('should return product with given Id', () => {
        const result = lib.getProduct(6);
        expect(result).toEqual({id: 6, product: 10 });
        expect(result).toMatchObject({id: 6, product: 10 }); // better way
    });
});

describe('registerUser', () => {
    it('should throw exception if username is falsy', () => {
        const args = [null, undefined, NaN, '', 0, false];
        args.forEach(a => {
             expect(() => {lib.registerUser(a)}).toThrow(); 
        })
      
    });
});