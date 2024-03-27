const express = require('express');
const server = express();

server.set('view engine', 'ejs');
server.set('views', 'views');
server.use(express.static('public'));

server.listen(8000, () => {
  console.log('server is running at 8000');
});

server.get('/', (req, res) => {
  res.render('index', {title: 'Main'});
});
server.get('/about', (req, res) => {
  res.render('about', {title: 'About'});
});
server.get('/create', (req, res) => {
  res.render('create', {title: 'Create'});
});

server.use((req, res) => {
  res.status(404).render('404');
});