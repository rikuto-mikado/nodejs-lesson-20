const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
// Import the admin module which exports an object containing a 'products' array.
// This allows the shop route to access products that were added via the admin route.
// The admin module shares its products data by exporting { products } instead of just the router.
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
