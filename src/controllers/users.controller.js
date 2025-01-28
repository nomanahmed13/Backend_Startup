'use strict';

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../services/users.service');

const getAllUsersHandler = async (fastify, request, reply) => {
    const users = await getAllUsers(fastify);
    return users;
};

const getUserByIdHandler = async (fastify, request, reply) => {
    const { id } = request.params;
    const user = await getUserById(fastify, id);
    if (!user) {
        reply.code(404).send({ message: 'User not found' });
    } else {
        return user;
    }
};

// const createUserHandler = async (fastify, request, reply) => {
//     const { name, email, age } = request.body;
//     const user = await createUser(fastify, name, email, age);
//     reply.code(201).send(user);
// };

const createUserHandler = async (fastify, request, reply) => {
    const { name, email, age } = request.body;

    console.log('Received data:', { name, email, age });

    if (!name || !email || !age) {
        return reply.code(400).send({ message: 'Missing required fields' });
    }

    try {
        const user = await createUser(fastify, name, email, age);
        reply.code(201).send(user);
    } catch (error) {
        console.error('Error in createUserHandler:', error);
        reply.code(500).send({ message: 'Internal Server Error', error: error.message });
    }
};


const updateUserHandler = async (fastify, request, reply) => {
    const { id } = request.params;
    const { name, email, age } = request.body;
    const user = await updateUser(fastify, id, name, email, age);
    if (!user) {
        reply.code(404).send({ message: 'User not found' });
    } else {
        return user;
    }
};

const deleteUserHandler = async (fastify, request, reply) => {
    const { id } = request.params;

    try {
        const success = await deleteUser(fastify, id);

        if (success) {
            return reply.code(200).send({
                message: `User with ID ${id} has been successfully deleted.`,
            });
        } else {
            return reply.code(404).send({
                message: `User with ID ${id} was not found.`,
            });
        }
    } catch (error) {
        fastify.log.error(error); // Log the error for debugging purposes
        return reply.code(500).send({
            message: 'An error occurred while attempting to delete the user.',
        });
    }
};


module.exports = {
    getAllUsersHandler,
    getUserByIdHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler,
};
