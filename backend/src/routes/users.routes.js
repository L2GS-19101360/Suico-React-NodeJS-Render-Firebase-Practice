const express = require('express');
const UserController = require('../controllers/users.controllers');
const router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/registerUser', UserController.createUser);
router.post('/loginUser', UserController.loginUser);

module.exports = router;
