const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Signup
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'All fields required' });

    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = { createUser, loginUser };
