const visitor = require('../model/visitor');

exports.main = (req, res) => {
  res.render('index');
}

exports.allVisitors = (req, res) => {
  visitor.allVisitors(result => {
    res.render('visitor', {data: result});
  })
}