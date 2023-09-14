import { Server } from '@hapi/hapi';

type Dependencies = {
    server?: Server;
};

export const createHelloWorldRoute = ({ server = new Server() }: Dependencies): Server => {
    server.route({
        method: 'GET',
        path: '/hello-world',
        handler: (request, h) => h.response('Hello world').code(200),
    });

    return server;
};
