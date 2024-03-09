const express = require('express');

const router = express.Router();


router.get('/ap',(req, res, next)=>{
    console.log("another page");
    res.send('<form action ="/admin/product" method="POST"><input type="text" placeholder="Product" name="title"><input type="text" placeholder="quantity" name="title"><button type="submit">ADD Product</button></form>')
});

router.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.send('<h1>this is YOur Cart</h1>')
    res.redirect('/');
});


module.exports=router;