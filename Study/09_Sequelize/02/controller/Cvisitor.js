const models = require('../models/index');
const visitor = models.visitor;
const user = models.user;

exports.main = (req, res) => {
  res.render('index');
}

exports.allVisitorList = (req, res) => {
  console.log('/controller/Cvisitor.allVisitorList');
  visitor.findAll().then((result) => {
    res.render('visitors', {data: result});
  })
}

exports.addVisitor = (req, res) => {
  console.log('/controller/Cvisitor.addVisitor');
  const {name, comment} = req.body;
  visitor.create({name: name, comment: comment}).then(result => {
    res.send(result);
  })
}

exports.getShowAVisitor = (req, res) => {
  console.log('/controller/Cvisitor.getShowAVisitor');
  visitor.findOne({
    where: {id: req.params.id},
  }).then(result => {
    res.send(result);
  })
}

exports.patchVisitor = (req, res) => {
  console.log('/controller/Cvisitor.patchVisitor');
  visitor.update({
    name: req.body.name,
    comment: req.body.comment,
  }, {
    where: {id: req.body.id},
  }).then(result => {
    res.send(result);
  })
}

exports.deleteVisitor = (req, res) => {
  console.log('/controller/Cvisitor.deleteVisitor');
  visitor.destroy({
    where: {id: req.body.id},
  }).then(result => {
    res.send('Comment deleted');
  })
}