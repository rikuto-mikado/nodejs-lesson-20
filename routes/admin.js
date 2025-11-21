const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

// Export both router and products array to share data across modules
// - routes: allows app.js to mount these routes at '/admin' path
// - products: allows other modules (e.g., shop.js) to access product data added via admin
exports.routes = router;
exports.products = products;
