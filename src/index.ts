import { init } from './server.js';
import { createHelloWorldRoute } from './routes/get-hello-world.js';
import dotenv from 'dotenv';
import process from 'process';
import { createLogger, Logger } from 'clienteling-commons';

dotenv.config();

const logger: Logger = createLogger({
    NODE_ENV: process.env.NODE_ENV,
    APPLICATIONINSIGHTS_CONNECTION_STRING: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING,
    applicationName: 'NAME-ME', // TODO Use application name instead of NAME-ME
});

const server = await init({ logger });
createHelloWorldRoute({ server });

console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
await server.start();
