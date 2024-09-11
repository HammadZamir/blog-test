// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define the route for getting users
router.get('/users', userController.getUser);
router.post('/add', userController.addUser);

module.exports = router;