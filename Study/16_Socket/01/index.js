const express = require('express');
const ws = require('ws');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('viws', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
})

const server = app.listen(PORT, () => {
  console.log('Server is running...');
})

const wsServer = new ws.Server({server: server});
const sockets = [];

wsServer.on('connection', (socket) => {
  console.log('client connected');
  sockets.push(socket);
  socket.on('message', (message) => {
    console.log(message);
    socket.send(message);
  })

  socket.on('listen', (err) => {
    console.log(err);
  })

  socket.on('close', () => {
    console.log('close connection');
  })
})