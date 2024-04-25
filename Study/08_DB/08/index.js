const express = require('express');
const app = express();
const router = require('./routes/index')
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/scripts', express.static(__dirname + '/scripts'));

app.use('/', router);
app.use('/visitor', router);
app.use('/selectVisitor', router);
app.use('/addUser', router);
app.use('/patchVisitor', router);
app.use('/deleteVisitor', router);

app.get('*', (req, res) => {
  res.render('404');
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}....`);
})