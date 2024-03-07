const http = require('http');

const server = http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('my Name is Omkar');
});

const PORT=4000;
server.listen(PORT,()=>{
    console.log(`Server is Running `);
});