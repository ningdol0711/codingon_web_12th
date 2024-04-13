const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(8000, () => {
  console.log('Server is running at 8000....');
})