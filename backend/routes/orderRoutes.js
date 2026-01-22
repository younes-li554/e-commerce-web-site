const express = require('express');
const router = express.Router();
const { createOrder, getOrders } = require('../controllers/orderController');

// Orders Routes
router.post('/', createOrder);   // Create order
router.get('/', getOrders);      // Get all orders

module.exports = router;
