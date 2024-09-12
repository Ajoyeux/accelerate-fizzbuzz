import { describe, expect, it } from 'vitest';
import { fizzbuzz } from '../src/fizzbuzz.js';

describe('Fizz Buzz', () => {
    it('should give 1 when 1 is given', async () => {
        const inputNumber = 1;

        const result = fizzbuzz(inputNumber);

        expect(result).toBe(1);
    });

    it('should give 2 when 2 is given', async () => {
        const inputNumber = 2;

        const result = fizzbuzz(inputNumber);

        expect(result).toBe(2);
    });

    it('should give Fizz when 3 is given', async () => {
        const inputNumber = 3;

        const result = fizzbuzz(inputNumber);

        expect(result).toBe('Fizz');
    });

    it('should give Fizz when 6 is given', async () => {
        const inputNumber = 6;

        const result = fizzbuzz(inputNumber);

        expect(result).toBe('Fizz');
    });

    it('should give Fizz when 9 is given', async () => {
        const inputNumber = 9;

        const result = fizzbuzz(inputNumber);

        expect(result).toBe('Fizz');
    });
});
