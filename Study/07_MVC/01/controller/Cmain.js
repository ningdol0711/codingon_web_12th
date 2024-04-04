const Comment = require('../model/Comments');
exports.main = (req, res) => {
  console.log('controller > Cmain.js : ');
  res.render('index');
}