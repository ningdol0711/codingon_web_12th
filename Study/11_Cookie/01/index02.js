const http = require('http');
const cookie = require('cookie');

http.createServer((req, res) => {
  let cookies = [];
  if (req.headers.cookie !== undefined) {
    cookies = cookie.parse(req.headers.cookie);
  }

  res.writeHead(200, {
    'set-cookie': [
      'password = 1234',
      'username = kdt; Max-Age = 6000',
      'DontReadHttp=myhttp; HttpOnly',
    ]
  })

  res.end('Cookie');
}).listen(8000, () => {
  console.log('Server is running at 8000');
})