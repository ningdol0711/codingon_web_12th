const http = require('http');
http.createServer(function(req,res){
   // Set-Cookie:  키=값
   if( req.headers.cookie !== undefined){
    console.log('이미 쿠기를 갖고 있나요 ',req.headers.cookie )
  }
   res.writeHead(200, {
       'set-cookie':['my_cookie=choco', 'your_cookie=strawberry']
   })
   res.end('Cookie')
}).listen(3000, ()=>{
  console.log('3000 server is running')
})