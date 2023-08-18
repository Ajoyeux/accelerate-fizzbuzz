import { Server } from '@hapi/hapi';
import process from 'process';

export const init = async () => {
    const server = new Server({
        // TODO CHANGE THE PORT
        port: process.env.PORT ?? 4000,
        host: '0.0.0.0',
    });

    server.route({
        method: 'GET',
        path: '/hello',
        handler: (request, h) => {
            return h.response('Hello world');
        },
    });

    return server;
};
