'use strict';

const fastifyPlugin = require('fastify-plugin');

async function dbConnector(fastify, options) {
    fastify.register(require('fastify-postgres'), {
        connectionString: `postgres://${options.user}:${options.password}@${options.host}:${options.port}/${options.database}`,
    });
    console.log('Database Connection Options:', options);
}

module.exports = fastifyPlugin(dbConnector);
