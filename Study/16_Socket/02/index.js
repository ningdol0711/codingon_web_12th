const express = require('express');
const socket = require('socket.io');
const http = require('http');
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/css', express.static(__dirname + '/static/css'));
app.use('/js', express.static(__dirname + '/static/js'));

const server = http.createServer(app);
const io = socket(server);

app.get('/', (req, res) => {
  fs.readFile('./static/index.html', (err, data) => {
    if(err) {
      res.send('Error');
    }
    else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  })
})

io.sockets.on('connection', (socket) => {

})

server.listen(8000, () => {
  console.log('Server is running at 8000....');
})