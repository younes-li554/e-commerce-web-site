const express = require('express');
const router = express.Router();
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');

// CRUD Routes
router.post('/', createProduct);          // Create
router.get('/', getProducts);            // Read
router.put('/:id', updateProduct);       // Update
router.delete('/:id', deleteProduct);    // Delete

module.exports = router;
