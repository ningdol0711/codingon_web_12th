const express = require('express');
const page = express();

page.set('view engine', 'ejs');
page.set('views', 'views');

page.use(express.urlencoded({extended: true}));
page.use(express.json());

page.get('/', (req, res) => {
  res.render('index');
})

const loginRouter = require('./routes/login');
page.use('/', loginRouter);

page.use('*', (req, res) => {
  res.status('404').render('404');
})

page.listen(8000, () => {
  console.log('Homepage is running at 8000');
})