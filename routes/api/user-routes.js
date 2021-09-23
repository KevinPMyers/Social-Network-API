const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserById
} = require('../../controllers/user-controller');

// Set up Get all and post /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// set up GET one, put, and delete at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;