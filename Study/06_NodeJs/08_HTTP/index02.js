const http_ex = require('http');
const server = http_ex.createServer();

server.on('connection', (socket) => {
  console.log('new connection');
});

server.listen(8000);
console.log('port opend at 8000');