const express = require('express');
const session = require('express-session');
const web = express();

web.set('view enigne', 'ejs');
web.set('views', 'views');

web.use(express.urlencoded({extended: true}));
web.use(express.json());

web.listen(8000, () => {
  console.log('Server is running at 8000....');
})