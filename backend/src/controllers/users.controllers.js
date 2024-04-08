const User = require('../models/users.models');

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.getAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = UserController;