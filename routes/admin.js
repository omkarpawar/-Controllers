const products = require('../controllers/products');
const express = require('express');
const router = express.Router();



router.get('/ap',products.addProduct);
router.post('/product',products.productAdded);



module.exports=router;