const User = require('../models/users.models');

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.getAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createUser: async (req, res) => {
        try {
            const userData = req.body;
            const result = await User.createUser(userData);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    loginUser: async (req, res) => {
        try {
            const loginData = req.body;
            const user = await User.loginUser(loginData);
            res.json({ user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const updateData = req.body;

            if (!userId) {
                return res.status(400).json({ error: 'User ID is required' });
            }

            await User.updateUser({ id: userId, ...updateData });
            res.json({ message: 'User Updated' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userId = req.params.id;

            if (!userId) {
                return res.status(400).json({ error: 'User ID is required' });
            }

            await User.deleteUser(userId);
            res.json({ message: 'User Deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = UserController;