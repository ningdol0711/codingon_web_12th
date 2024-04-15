const express = require('express');
const cookieParser = require('cookie-parser');
const web = express();

const cookieConfig = {
  maxAge: 24 * 60 * 60 * 1000,
  signed: true,
}

web.use(express.urlencoded({extended: true}));
web.use(express.json());
web.use(cookieParser('secret'));

web.set('view engine', 'ejs');
web.set('views', 'views');

web.get('/', (req, res) => {
  res.render('index', {popup: req.signedCookies.popup});
})

web.post('/setCookie', (req, res) => {
  res.cookie('popup', 'hide', cookieConfig);
  res.send('cookie set');
})

web.listen(8000, () => {
  console.log('Server is running at 8000....');
})