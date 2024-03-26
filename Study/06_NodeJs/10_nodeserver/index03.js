const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  var _url = req.url;
  res.write(`<h1>Hello!!</h1>`);
  res.end(`<p>End ${_url}</p>`);
});

server.listen(8000, () => {
  console.log('port 8000 has opend');
});