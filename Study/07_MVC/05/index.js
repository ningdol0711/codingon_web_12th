const express = require('express');
const web = express();

web.set('view engine', 'ejs');
web.set('views', 'views');

web.use(express.urlencoded({extended: true}));
web.use(express.json());

const custRoute = require('./routes/main');
web.use('/', custRoute);

web.listen(8000, () => {
  console.log('Server is running at 8000');
})