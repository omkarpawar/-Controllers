
const express = require('express');
const http =require('http');
const bodyParser=require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());

app.use('/ap',(req, res, next)=>{
    console.log("another page");
    res.send('<form action ="/product" method="POST"><input type="text" placeholder="Product" name="title"><input type="text" placeholder="quantity" name="title"><button type="submit">ADD Product</button></form>')
});

app.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.send('<h1>this is YOur Cart</h1>')
    res.redirect('/');
});


app.use('/',(req, res, next)=>{
    console.log("main page");
    res.send('<h1>this is main page</h1>')
});



app.listen(3000);
    

