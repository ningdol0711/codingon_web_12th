const visitors = require('../model/Visitors');

exports.main = (req, res) => {
  res.render('index');
}

exports.visitor = (req, res) => {
  visitors.visitors(result => {
    res.render('visitor', {data: result});
  })
}