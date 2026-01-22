const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

router.post('/signup', createUser);
router.post('/login', loginUser);

// Example of protected route
// router.get('/admin', authMiddleware, adminMiddleware, (req, res) => res.send('Admin access only'));

module.exports = router;
