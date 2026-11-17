import validateUser from './user.validation.js';
import { createUserSchema, userIdSchema, updateUserSchema } from './user.schema.js';
const getUsers = (req, res) => {
    // Logic to retrieve all users from the database
    res.status(200).json({ message: 'Retrieved all users' });
};

const getUserById = (req, res) => {
    const { isValid, data, errors } = validateUser(userIdSchema, req.params);
    if (!isValid) {
        return res.status(400).json({ errors });
    }
    // Logic to retrieve a user by ID from the database
    res.status(200).json({ message: `Retrieved user with ID: ${data.id}`, user: data });
};

const createUser = (req, res,) => {
    const { isValid, data, errors } = validateUser(createUserSchema, req.body);
    if (!isValid) {
        return res.status(400).json({ errors });
    }
    // Logic to create a new user in the database
    res.status(201).json({ message: 'User created successfully', user: data });
};

const updateUser = (req, res) => {
    const { isValid, data, errors } = validateUser(updateUserSchema, { ...req.body, id: req.params.id });
    if (!isValid) {
        return res.status(400).json({ errors });
    }
    // Logic to update an existing user in the database
    res.status(200).json({ message: `User with ID: ${data.id} updated successfully`, user: data });
}

const deleteUser = (req, res) => {
    const { isValid, data, errors } = validateUser(userIdSchema, req.params);
    if (!isValid) {
        return res.status(400).json({ errors });
    }
    // Logic to delete a user from the database
    res.status(200).json({ message: `User with ID: ${data.id} deleted successfully` });
}

export {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
