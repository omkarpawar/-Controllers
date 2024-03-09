
const express = require('express');
const http =require('http');
const app = express();

app.use((req, res, next)=>{
    console.log("IN the middileware");

    next();
});
app.use((req, res, next)=>{
    console.log("In the another middleware");
    res.send('<h1>HELLO FROM EXPRESS</h1>')
});

app.listen(3000);
    

