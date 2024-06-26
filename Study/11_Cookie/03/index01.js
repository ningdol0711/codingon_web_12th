const express = require('express');
const cookieParser = require('cookie-parser');
const web = express();
const PORT = 8000;

const cookieConfig = {
  maxAge: 24 * 60 * 60 * 1000,
}

web.use(cookieParser());
web.use(express.urlencoded({extended: true}));
web.use(express.json());

web.set('view engine', 'ejs');
web.set('views', 'views');

web.get('/', (req, res) => {
  console.log(req.cookies.popup);
  res.render('index', {popup: req.cookies.popup});
})

web.post('/setCookie', (req, res) => {
  res.cookie('popup', 'hide', cookieConfig);
  res.send('success');
})

web.listen(PORT, () => {
  console.log(`Server is running at ${PORT}...`);
})