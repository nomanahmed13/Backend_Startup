'use strict';

const {
    getAllUsersQuery,
    getUserByIdQuery,
    createUserQuery,
    updateUserQuery,
    deleteUserQuery,
} = require('../models/users');

async function getAllUsers(fastify) {
    const client = await fastify.pg.connect();
    try {
        const { rows } = await client.query(getAllUsersQuery);
        return rows;
    } finally {
        client.release();
    }
}

async function getUserById(fastify, id) {
    const client = await fastify.pg.connect();
    try {
        const { rows } = await client.query(getUserByIdQuery, [id]);
        return rows[0];
    } finally {
        client.release();
    }
}

async function createUser(fastify, name, email, age) {
    const client = await fastify.pg.connect();
    try {
        const { rows } = await client.query(createUserQuery, [name, email, age]);
        return rows[0];
    } finally {
        client.release();
    }
}


// async function createUser(fastify, name, email, age) {
//     if (!name || !email || !age) {
//         throw new Error('Missing required fields');
//     }
//     const client = await fastify.pg.connect();
//     if (!client) {
//         console.error('Client connection failed');
//         throw new Error('Failed to connect to the database');
//     }
//     try {
//         const { rows } = await client.query(
//             `INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *`,
//             [name, email, age]
//         );
//         if (!rows.length) {
//             throw new Error('Failed to create user');
//         }
//         return rows[0];
//     } catch (error) {
//         console.error('Error creating user:', error);
//         throw new Error('Database error occurred while creating user');
//     } finally {
//         client.release();
//     }
// }



async function updateUser(fastify, id, name, email, age) {
    const client = await fastify.pg.connect();
    try {
        const { rows } = await client.query(updateUserQuery, [name, email, age, id]);
        return rows[0];
    } finally {
        client.release();
    }
}

async function deleteUser(fastify, id) {
    const client = await fastify.pg.connect();
    try {
        const { rowCount } = await client.query(deleteUserQuery, [id]);
        return rowCount > 0;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
