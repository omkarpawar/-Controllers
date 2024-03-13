const path = require('path');
const rootDir = require('../util/path');

exports.addProduct=(req, res, next)=>{
    
    res.sendFile(path.join(rootDir,'views','addProduct.html'));
    
  
}

exports.productAdded=(req, res, next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','productAdded.html'));
    
}

exports.contactUs=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contactUs.html'));
}

exports.success=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
}

exports.shop=(req, res, next)=>{
    console.log("main page");
    res.sendFile(path.join(rootDir,'views','shop.html'));
}

exports.pageNotFound=(req,res)=>{
    res.sendFile(path.join(__dirname,'./','views','pageNotFound.html'));
}