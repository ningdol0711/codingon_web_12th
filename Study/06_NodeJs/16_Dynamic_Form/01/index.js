const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('test');
})

app.get('/pratics1', (req, res) => {
  res.render('pratics1');
})

app.get('/pratics2', (req, res) => {
  res.render('pratics2');
})

// ajax requests
app.get('/ajax', (req, res) => {
  console.log(req.query);
  res.send(req.query);
})
app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

// axios requests
app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
})
app.post('/axios', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

// fetch
app.get('/fetch', (req, res) => {
  console.log(req.query);
  res.send(req.query);
})
app.post('/fetch', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

app.listen(7000, () => {
  console.log('server is opend at 7000');
})