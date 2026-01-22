const Order = require('../models/Order');

// CREATE Order
const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: "Order placed successfully!", order });
  } catch (error) {
    console.error("ORDER ERROR ❌", error);
    res.status(500).json({ error: error.message });
  }
};

// READ all Orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

module.exports = { createOrder, getOrders };
