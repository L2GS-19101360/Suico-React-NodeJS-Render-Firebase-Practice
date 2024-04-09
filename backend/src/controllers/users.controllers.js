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
            await User.createUser(userData);
            res.status(201).json({ message: 'User Created' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    loginUser: async (req, res) => {
        try {
            
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = UserController;