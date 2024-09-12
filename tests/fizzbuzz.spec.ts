import { describe, expect, it } from 'vitest';
import { fizzbuzz } from '../src/fizzbuzz.js';

describe('Fizz Buzz', () => {
    it('should give 10 when 10 is given', async () => {
        const inputNumber = 10;

        const result = fizzbuzz(inputNumber);

        expect(result).toBe(10);
    });
});
