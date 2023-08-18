import { Server } from '@hapi/hapi';

export const init = async () => {
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
