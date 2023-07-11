import { helloWorld } from '@src/index.js';
import { expect, describe, it } from 'vitest';

describe('Hello world', () => {
    it('should say hello', function () {
        expect(helloWorld).toEqual('Hello World');
    });
});
