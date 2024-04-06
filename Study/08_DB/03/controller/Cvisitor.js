const visitor = require('../model/Visitor');

exports.main = (req, res) => {
  console.log('Cvisitor require Visitor.js at model(Cvisitor.main)');
  res.render('index', );
}

exports.visitor = (req, res) => {
  console.log('Cvisitor require Visitor.js at model(Cvisitor.visitor)');
  visitor.visitors(result => {
    res.render('visitors', {result: result});
  });
}