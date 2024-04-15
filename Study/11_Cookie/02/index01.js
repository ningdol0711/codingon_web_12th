const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser('secret key'));

app.set('view engine', 'ejs');
app.set('views', 'views');

const cookieConfig1 = {
  maxAge : 60 * 1000,
  httpOnly : true,
  signed : true,
}

const cookieConfig2 = {
  path: '/another',
  maxAge: 60 * 1000,
  httpOnly: true,
}

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/setCookie', (req, res) => {
  res.cookie('mycookie', '1234', cookieConfig1);
  res.send('complite1');
})

app.get('/getCookie', (req, res) => {
  console.log(req.signedCookies);
})

app.get('/delCookie', (req, res) => {
  res.clearCookie('mycookie', '1234', cookieConfig1);
  res.send('complite');
})

app.get('/another', (req, res) => {
  res.cookie('anotherCookie', 'another page cookie', cookieConfig2);
  res.render('another');
})

app.listen(8000, () => {
  console.log('Server is running at 8000');
})