module.exports = async (err, request, reply) => {
    request.log.error(err);
    reply.code(err.statusCode || 500).send({
        error: true,
        message: err.message || 'Internal Server Error'
    });
};