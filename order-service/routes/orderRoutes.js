const express = require('express');
const Order = require('../models/Order');
const User = require('../models/User');
const Product = require('../models/Product');
const axios = require('axios');

const router = express.Router();

// Fetch all orders with populated user and product details
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();

    // Fetch all users and products using service names
    const usersResponse = await axios.get('http://user-service:3001/users');
    const productsResponse = await axios.get('http://product-service:3002/products');

    const users = usersResponse.data;
    const products = productsResponse.data;

    // Manually populate user and product data in orders
    const populatedOrders = orders.map(order => {
      const user = users.find(user => user._id.toString() === order.user.toString());
      const product = products.find(product => product._id.toString() === order.product.toString());
      return {
        ...order._doc, // Spread order document
        user: user || null,
        product: product || null
      };
    });

    res.render('orders', { orders: populatedOrders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Render the add-to-cart page
router.get('/orders/add-to-cart', (req, res) => {
  res.render('index');
});

// Handle adding items to the cart
router.post('/orders/add-to-cart', async (req, res) => {
  const { userName, productName } = req.body;


  try {
    // Fetch all users and products from the respective routes
    const usersResponse = await axios.get('http://user-service:3001/users');
    const productsResponse = await axios.get('http://product-service:3002/products');

    const users = usersResponse.data;
    const products = productsResponse.data;

    console.log(users, products);

    // Find user and product by their names
    const user = users.find(user => user.name === userName);
    const product = products.find(product => product.name === productName);

    if (!user || !product) {
      return res.status(404).json({ error: 'User or Product not found' });
    }

    // Create a new order with the user and product IDs
    const order = new Order({ user: user._id, product: product._id });
    await order.save();

    res.redirect('/');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;