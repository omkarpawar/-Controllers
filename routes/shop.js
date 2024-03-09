const express = require('express');

const route = express.Router();

route.get('/',(req, res, next)=>{
    console.log("main page");
    res.send('<h1>this is main page</h1>')
});

module.exports=route;