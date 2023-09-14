import { init } from './server.js';
import { Logger } from './logger.js';
import { createHelloWorldRoute } from './routes/get-hello-world.js';

const logger: Logger = {
    logError: (exception) => console.log(exception),
};

const server = await init({ logger });
createHelloWorldRoute({ server });

console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
await server.start();
