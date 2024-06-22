const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products)
});

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.render('products', { products: products });
});

router.get('/products/add-product', (req, res) => {
  res.render('index');
})

router.post('/products/add-product', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  
  res.redirect('/');
});

module.exports = router;