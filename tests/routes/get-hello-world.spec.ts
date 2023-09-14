import { describe, expect, it } from 'vitest';
import { createHelloWorldRoute } from '../../src/routes/get-hello-world.js';

describe('/hello-world', () => {
    it('should say hello', async () => {
        const server = createHelloWorldRoute({});

        const response = await server.inject({ method: 'GET', url: '/hello-world' });

        expect(response.statusCode).toBe(200);
        expect(response.payload).toBe('Hello world');
    });
});
