const express = require('express');
const session = require('express-session');
const web = express();

const user = {id: 'banana', pw: '1234'};

web.use('static', express.static(__dirname + '/static'));
web.use(express.urlencoded({extended: true}));
web.use(express.json());

web.set('view engine', 'ejs');
web.set('views', 'views');

web.use(session({
  secret: 'YHS',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
  }
}))

web.get('/', (req, res) => {
  res.render('index', {login: req.session.user, name: req.session.name});
  console.log(req.session);
})

web.get('/login', (req, res) => {
  res.render('login');
})

web.post('/login', (req, res) => {
  req.session.name = req.body.id;
  if(JSON.stringify(req.body) == JSON.stringify(user)) {
    req.session.user = 'logout';
    res.render('index', {login: req.session.user, name: req.session.name});
    console.log(req.session);
  }
  else {
    res.send('Please check your ID, PW');
  }
})

web.get('/logout', (req, res) => {
  req.session.user = 'login';
  req.session.name = req.body.id;
  res.render('index', {login: req.session.user, name: req.session.name});
  console.log(req.session);
})

web.listen(8000, () => {
  console.log('Server is running at 8000....');
})