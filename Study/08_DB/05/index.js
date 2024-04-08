const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/static', express.static(__dirname + '/static'));

const mainRouter = require('./routes/index');
app.use('/', mainRouter);

app.use('/visitor', mainRouter);

app.get('*', (req, res) => {
  res.render('404');
})

app.listen(8000, () => {
  console.log('Server is running at 8000...');
})