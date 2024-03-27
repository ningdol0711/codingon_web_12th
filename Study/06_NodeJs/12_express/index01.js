const express = require('express');
const server = express();

server.listen(8000, () => {
  console.log('server is running at 8000');
});

server.get((req, res) => {
  res.render('/index', {title: 'Main'});
});
server.get((req, res) => {
  res.render('/about', {title: 'About'});
});
server.get((req, res) => {
  res.render('/create', {title: 'Create'});
});