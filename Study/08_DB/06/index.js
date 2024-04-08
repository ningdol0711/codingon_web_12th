const express = require('express');
const web = express();

web.set('view engine', 'ejs');
web.set('views', 'views');

web.use(express.urlencoded({extended: true}));
web.use(express.json());

web.use('/static', express.static(__dirname + '/static'));

const mainRouter = require('./routes/index');
web.use('/', mainRouter);
web.use('/visitors', mainRouter);

web.get('*', (req, res) => {
  res.render('404');
})

web.listen(8000, () => {
  console.log('Server is running at 8000');
})