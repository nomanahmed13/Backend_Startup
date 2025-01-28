const fastify = require('fastify')({ logger: true });
const dbConfig = require('./config/db.config');

require('dotenv').config();

fastify.register(require('./plugins/db'), dbConfig);
fastify.register(require('./routes/users.route'));
fastify.setErrorHandler(require('./middlewares/errorHandler'));

module.exports = fastify;