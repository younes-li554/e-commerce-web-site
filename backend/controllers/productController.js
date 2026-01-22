const Product = require('../models/Product');

// CREATE
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product created successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

// READ all
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// UPDATE by ID
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "Product updated successfully!", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

// DELETE by ID
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
