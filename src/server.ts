import { Server } from '@hapi/hapi';
import process from 'process';
import { Logger } from './logger.js';

export type Dependencies = {
    logger: Logger;
};

export const init = async ({ logger }: Dependencies) => {
    const server = new Server({
        // TODO CHANGE THE PORT
        port: process.env.PORT ?? 4000,
        host: '0.0.0.0',
    });

    server.events.on({ name: 'request', channels: 'error' }, (request, event) => {
        logger.logError(event.error);
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
