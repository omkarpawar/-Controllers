const http = require('http');

const server = http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("welcome to the page");


    const url=req.url;

    if(url==='/home'){

        res.writeHead=(200,{'Content-Type':'text/html'});
        res.end('Welcome Home ');

    }else if(url==='/about'){

        res.writeHead=(200,{'Content-Type':'text/html'});
        res.end('Welcome to about');

    }else if(url === '/node'){

        res.writeHead=(200,{'Content-Type':'text/html'});
        res.end('Welcome to Node');

    }else{

        res.writeHead=(200,{'Content-Type':'text/html'});
        res.end('404 NOT FOUND');
    }

});

const PORT=4000;
server.listen(PORT,()=>{
    console.log(`Server is Running `);
});