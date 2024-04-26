const express = require('express');
const cookie = require('cookie-parser');
const app = express();

const cookieConfig = {
  httpOnly: true,
  signed: true,
  maxAge: 60 * 1000,
}

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cookie('YHS'));

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/setCookie', (req, res) => {
  res.cookie('Login', 'YHS', cookieConfig);
  res.send('Cookie set');
})
app.get('/getCookie', (req, res) => {
  res.send(req.signedCookies);
})
app.get('/clearCookie', (req, res) => {
  res.clearCookie('Login', 'YHS', cookieConfig);
  res.send('Cookie clear');
})

app.listen(8000, () => {
  console.log('Server is running at 8000....');
})