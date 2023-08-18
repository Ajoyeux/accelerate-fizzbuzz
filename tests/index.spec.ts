import { beforeEach, describe, expect, it } from 'vitest';
import { Server } from '@hapi/hapi';

const init = () => {
    const server = new Server();

    server.route({
        method: 'GET',
        path: '/hello',
        handler: (request, h) => {
            return h.response('Hello world');
        },
    });

    return server;
};

describe('Hello world', () => {
    let app: Server;

    beforeEach(() => {
        app = init();
    });

    it('should say hello', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/hello',
        });

        expect(response.payload).toBe('Hello world');
    });
});
