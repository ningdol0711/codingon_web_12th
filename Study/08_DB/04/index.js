const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('static', express.static(__dirname+'static'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.use('/visitor', indexRouter);

app.listen(8000, () => {
  console.log('Server is running at 8000....');
})