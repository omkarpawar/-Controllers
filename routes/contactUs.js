const express = require('express');
const route = express.Router();
const contUs= require('../controllers/products')
const success= require('../controllers/products')



route.get('/contactUs',contUs.contactUs)
route.post('/success',success.success)



module.exports=route;