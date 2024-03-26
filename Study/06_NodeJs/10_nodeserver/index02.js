const http = require('http');

http.createServer((req, res) => {
  // send http header, status, content-type
  // res.writeHead(200, {'Content-Type': 'text/plain'}); //화면에 표시되는 컨탠트의 타입을 정한다.
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`<h2>hello world</h2>`);
}).listen(3000);