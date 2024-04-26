const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
  secret: 'YHS',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 1000,
  }
}))

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/set', (req, res) => {
  req.session.name = 'YHS';
  res.send('Session set');
})

app.get('/get', (req, res) => {
  res.send({id : req.sessionID, name: req.session.name});
})

app.get('/destroy', (req, res) => {
  req.session.destroy((err) => {
    if(err) {console.log(err); }
    else {res.redirect('/get')}
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}....`);
})