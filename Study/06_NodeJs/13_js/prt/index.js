const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {title: 'MAIN'});
})

app.get('/about', (req, res) => {
  res.render('about', {title: 'ABOUT'});
})

app.get('/create', (req, res) => {
  res.render('create', {title: 'CREATE'});
})

app.listen(8000, () => {
  console.log('server is opend');
});