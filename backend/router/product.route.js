const express = require('express');
const router = express.Router();
const { getProducts, createProduct, deleteProduct } = require('../controllers/product.controller');

// GET all products
router.get('/products', getProducts);

// POST create a product
router.post('/products', createProduct);

// DELETE a product
router.delete('/products/:id', deleteProduct);

module.exports = router;