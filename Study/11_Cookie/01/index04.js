const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const cookieCofig = {
  path: '/abc',
  maxAge: 60 * 1000,
  httpOnly: true,
}

app.get('/', (req, res) => {
  res.render('cookie');
})

app.get('/abc', (req, res) => {
  res.cookie('abc-page', 'abc page cookie', cookieCofig);
  res.render('another');
})

app.listen(8000, () => {
  console.log('Server is running at 8000...');
})