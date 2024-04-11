import { beforeEach, describe, expect, it } from 'vitest';
import { Server } from '@hapi/hapi';
import { Dependencies, init } from '../src/server.js';
import { createTestLogger, type Mocks } from 'clienteling-commons/tests/index.js';

describe('Messages History', () => {
    let app: Server;
    let mocks: Mocks<Omit<Dependencies, 'database'>>;

    beforeEach(async () => {
        mocks = {
            logger: createTestLogger(),
        };
        app = await init(mocks);
    });

    describe('Error handler', () => {
        it('should log errors', async () => {
            const error = new Error('error for tests');
            app.route({
                method: 'GET',
                path: '/error',
                handler: () => {
                    throw error;
                },
            });

            await app.inject({
                method: 'GET',
                url: '/error',
            });

            expect(mocks.logger.logError).toHaveBeenCalledWith(error);
        });
    });
});
