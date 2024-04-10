const express = require('express');
const UserController = require('../controllers/users.controllers');
const router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/registerUser', UserController.createUser);
router.post('/loginUser', UserController.loginUser);
router.put('/updateUser/:id', UserController.updateUser);
router.delete('/deleteUser/:id', UserController.deleteUser);

module.exports = router;
