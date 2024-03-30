const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(7777, () => {
  console.log('server is opend');
})

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/signin', (req, res) => {
  res.render('signin', {userInfo: req.query});
  console.log(req.query);
})