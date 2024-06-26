const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/static', express.static(__dirname + '/static'));

const router = require('./routes/index');
app.use('/', router);
app.use('/visitor', router);
app.use('/addUser', router);
app.use('/visitormodify/:id`', router);
app.use('/visitordoEdit', router);
app.use('/deleteVisitor', router);

app.get('*', (req, res) => {
  res.render('404');
})

app.listen(8000, () => {
  console.log('Server is running at 8000');
})