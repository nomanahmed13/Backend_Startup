'use strict';

const {
    getAllUsersHandler,
    getUserByIdHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler,
} = require('../controllers/users.controller');

async function userRoutes(fastify, options) {
    fastify.get('/fetchUsers', (request, reply) => getAllUsersHandler(fastify, request, reply));
    fastify.get('/users/:id', (request, reply) => getUserByIdHandler(fastify, request, reply));
    fastify.post('/users', (request, reply) => createUserHandler(fastify, request, reply));
    fastify.put('/users/:id', (request, reply) => updateUserHandler(fastify, request, reply));
    fastify.delete('/users/:id', (request, reply) => deleteUserHandler(fastify, request, reply));
}

module.exports = userRoutes;
