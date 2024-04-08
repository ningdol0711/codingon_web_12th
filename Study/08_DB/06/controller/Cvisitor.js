const visitors = require('../model/Visitors');

exports.main = (req, res) => {
  visitors.main(result => {
    console.log('/controller/Cvisitor.main');
    res.render('visitors', {data: result});
  })
}

exports.addVisitor = (req, res) => {
  console.log('/controller/Cvisitor.addVisitor');
  const {name, comment} = req.body;
  visitors.add(req.body, (result) => {
    res.send({id: result, name, comment});
  })
}

exports.deleteVisitor = (req, res) => {
  console.log('/controller/Cvisitor.deleteVisitor');
  visitors.del((req.body.id), (result) => {
    console.log('Delete success');
    res.send('Delete success');
  })
}

exports.selectVisitor = (req, res) => {
  console.log('/controller/Cvisitor.editVisitor');
  visitors.select(req.body, (result) => {
    console.log(result);
  });
}