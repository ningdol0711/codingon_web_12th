const visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
}

exports.visitor = (req, res) => {
  visitor.allVisitor(result => {
    res.render('visitor', {data: result});
  })
}

exports.addVisitor = (req, res) => {
  const {name, comment} = req.body;
  visitor.addVisitor(req.body, result => {
    res.send({id: result, name: name, comment: comment});
  })
}

exports.selectVistor = (req, res) => {
  visitor.selectVisitor(req.params.id, result => {
    res.send({id: result[0].id, name: result[0].name, comment: result[0].comment});
  })
}

exports.editVisitor = (req, res) => {
  visitor.editVisitor(req.body, result => {
    res.send(result);
  })
}

exports.deleteVisitor = (req, res) => {
  visitor.deleteVisitor(req.body.id, result => {
    res.send('Success');
  })
}