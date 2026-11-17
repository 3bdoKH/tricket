const { Router } = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('./user.controller');

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;