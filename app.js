const path = require('path');
const express = require('express');
const http =require('http');
const bodyParser=require('body-parser');
const errorController=require('./controllers/error')
const app = express();

const contactUs=require('./routes/contactUs');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded());

app.use('/contact',contactUs);
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);


app.use(errorController.pageNotFound);

app.listen(3000);
    

