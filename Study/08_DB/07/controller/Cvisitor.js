const visitor = require('../model/visitor');

exports.main = (req, res) => {
  res.render('index');
}

exports.allVisitors = (req, res) => {
  visitor.allVisitors(result => {
    res.render('visitor', {data: result});
  })
}

exports.addVisitor = (req, res) => {
  const {name, comment} = req.body;
  visitor.postAddVisitor(req.body, (result) => {
    res.send({id: result, name, comment});
  })
}

exports.getVisitor = (req, res) => {
  visitor.getVisitor(req.params.id, (result) => {
    res.send(result);
  })
}

exports.patchVisitor = (req, res) => {
  visitor.postContent(req.body, (result) => {
    res.send(result);
  })
}

exports.delVisitor = (req, res) => {
  visitor.delVisitor(req.body.id, (result) => {
    res.send('Deleted');
  })
}