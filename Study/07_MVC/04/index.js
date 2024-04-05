const express = require('express');
const web = express();

web.set('view engine', 'ejs');
web.set('views', 'views');

web.use(express.urlencoded({extended: true}));
web.use(express.json());

const commentRouter = require('./routes/index');
web.use('/', commentRouter);

const userRouter = require('./routes/user');
web.use('/user', userRouter);

web.listen(8000, () => {
  console.log('server is running at 8000');
})