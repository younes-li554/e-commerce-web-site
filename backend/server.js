const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
require('./db');

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Only allow frontend
app.use(express.json());
app.use(morgan('dev')); // Logging requests

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('E-commerce Store Backend is running ✅');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
