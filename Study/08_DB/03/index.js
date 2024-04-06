const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const visitorRouter = require('./routes/index');
app.use('/visitors', visitorRouter);

app.listen(3000, () => {
  console.log('Server is running at 3000');
})