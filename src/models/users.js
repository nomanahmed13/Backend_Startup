'use Strict';

const getAllUsersQuery = 'SELECT * FROM users';
const getUserByIdQuery = 'SELECT * FROM users WHERE Id = $1;';
const createUserQuery = 'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *;';
const updateUserQuery = 'UPDATE users SET name = $1, email = $2, age = $3 WHERE Id = $4 RETURNING *;';
const deleteUserQuery = 'DELETE FROM users WHERE id = $1;';

module.exports = {
    getAllUsersQuery,
    getUserByIdQuery,
    createUserQuery,
    updateUserQuery,
    deleteUserQuery
}