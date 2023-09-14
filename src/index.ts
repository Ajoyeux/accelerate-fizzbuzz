import { init } from './server.js';
import { Logger } from './logger.js';
import { createHelloWorldRoute } from './routes/get-hello-world.js';
import dotenv from 'dotenv';
import process from 'process';
import appInsights from 'applicationinsights';

dotenv.config();
appInsights.setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING).start();
appInsights.defaultClient.context.tags['ai.cloud.role'] = 'NAME-ME'; // TODO Use application name instead of NAME-ME

const logger: Logger = {
    logError: (exception) => {
        if (exception instanceof Error) appInsights.defaultClient.trackException({ exception });
    },
};

const server = await init({ logger });
createHelloWorldRoute({ server });

console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
await server.start();
