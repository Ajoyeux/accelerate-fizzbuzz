import { beforeEach, describe, expect, it } from 'vitest';
import { Server } from '@hapi/hapi';
import { init } from '../src/server.js';

describe('Hello world', () => {
    let app: Server;

    beforeEach(async () => {
        app = await init();
    });

    it('should say hello', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/hello',
        });

        expect(response.payload).toBe('Hello world');
    });
});
