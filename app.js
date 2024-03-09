
const express = require('express');
const http =require('http');
const bodyParser=require('body-parser');
const app = express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded());

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);


app.use((req,res)=>{
    res.status(404).send('<h1> PAGE NOT FOUND</h1>')
})

app.listen(3000);
    

