const express = require('express');
const app = express();
const router = require('./routes/index');
const {sequelize} = require('./models');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', router);

sequelize.sync({
  force: false,
}).then(() => {
  app.listen(8000, () => {
    console.log('Server is running at 8000....');
  })
}).catch(err => {
  console.log(err);
})