import { init } from './server.js';

const server = await init();

console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
await server.start();
