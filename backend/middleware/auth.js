const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer TOKEN
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Middleware for Admin only
const adminMiddleware = (req, res, next) => {
  if (req.user?.role !== 'Admin') return res.status(403).json({ error: 'Admins only' });
  next();
};

module.exports = { authMiddleware, adminMiddleware };
