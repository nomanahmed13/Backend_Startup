const app = require('./app');

const start = async () => {
    try {
        await app.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
        app.log.info(`Server running at http://localhost:${process.env.PORT || 3000}`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();