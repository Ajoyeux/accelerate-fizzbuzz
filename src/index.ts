import { init } from './server.js';
import { Logger } from './logger.js';

const logger: Logger = {
    logError: (exception) => console.log(exception),
};

const server = await init({ logger });

console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
await server.start();
