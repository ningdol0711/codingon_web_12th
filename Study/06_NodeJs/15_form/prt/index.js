const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(1234, () => {
  console.log('server is running.....');
})

app.get('/', (req, res) => {
  res.render('index', {title: 'Main'});
})

app.get('/login_get', (req, res) => {
  console.log('get request'); // get방식일때에는 req.query에 데이터가 저장된다.
  res.render('login_get', {title:'Get', userInfo: req.query});
})

app.post('/login_post', (req, res) => {
  console.log('post request'); // post방식일때에는 req.body에 데이터가 저장된다.
  res.render('login_post', {title: 'Post', userInfo: req.body}); 
})

app.post('/js-form-check', (req, res) => {
  console.log('post request');
  console.log(req.body);
  res.send('js vaildation success');
})