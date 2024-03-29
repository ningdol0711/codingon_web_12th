const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

app.listen(8000,() => {
  console.log('server opend at 8000');
})

app.get('/', (req, res) => {
  res.render('index', {title: 'main'});
})

app.get('/about', (req, res) => {
  res.render('about', {title: 'about'});
})

app.get('/create', (req, res) => {
  res.render('create', {title: 'create'});
})