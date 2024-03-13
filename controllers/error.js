const path = require('path');
const rootDir = require('../util/path');

exports.pageNotFound=((req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','pageNotFound.html'));
})