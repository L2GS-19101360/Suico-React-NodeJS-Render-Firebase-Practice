const express = require('express');
const UserController = require('../controllers/users.controllers');
const router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/registerUser', UserController.createUser);
router.post('/loginUser', UserController.loginUser);
router.put('/updateUser/:input', UserController.updateUser);
router.delete('/deleteUser/:input', UserController.deleteUser);

module.exports = router;
