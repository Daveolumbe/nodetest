const exercise = require('../exercise1');

describe('exercise1', () => {

    it('should throw an exception if input is not a number', () => {
        expect(() => {exercise.fizzBuzz('16')}).toThrow();
        expect(() => {exercise.fizzBuzz(null)}).toThrow();
        expect(() => {exercise.fizzBuzz(undefined)}).toThrow();
        expect(() => {exercise.fizzBuzz({})}).toThrow();
    });

    it('should return FizzBuzz is input provided is divisible by 3 and 5', () => {
        const result = exercise.fizzBuzz(15);
        expect(result).toBe('FizzBuzz')
    });

    it('should return Fizz is input provided is only divisible by 3', () => {
        const result = exercise.fizzBuzz(9);
        expect(result).toBe('Fizz')
    });

    it('should return Buzz is input provided is only divisible by 5', () => {
        const result = exercise.fizzBuzz(10);
        expect(result).toBe('Buzz')
    });

    it('should return input is not divisible by 5 and 3', () => {
        const result = exercise.fizzBuzz(7);
        expect(result).toBe(7)
    });
});