const fs =require('fs');

const requestHandler = (req,res)=>{
    const url = req.url;
    const method=req.method;
    if(url === '/'){
        fs.readFile("message1.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }
            
            res.write('<html>');
            res.write('<head><title>demo</title></head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit"  >Submit</button></form></body>')
            res.write('</html>')
            return res.end();
        })
       
    
    
    }
    if(url === '/message' && method ==='POST' ){
    
        const body =[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
    
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split('=')[1];
            fs.writeFile('message1.txt' , message, err =>{
                if(err){
                    console.log(err);
                }
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
    
        });
        
        
    }
    
    res.setHeader('Content-Type','text/html');
    
}


module.exports=requestHandler;