const express = require('express');
const UserController = require('../controllers/users.controllers');
const router = express.Router();

router.get('/', UserController.getAllUsers);

module.exports = router;
