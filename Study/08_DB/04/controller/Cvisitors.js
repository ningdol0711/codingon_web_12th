const visitors = require('../model/Visitors');

exports.main = (req, res) => {
  res.render('index');
}

exports.visitor = (req, res) => {
  console.log('/controller/Cvisitor.visitor');
  console.log(req.query);
  res.render('visitor', {data: req.query});
  visitors.visitors(result => {
    res.send(result);  
  })
}

exports.get_visitor = (req, res) => {
  console.log('/controller/Cvisitor.get_visitor');
  visitors.get_visitors(req.query.id, (result) => {
    res.send(result);
  })
}

exports.post_visitor = (req, res) => {
  console.log('/controller/Cvisitor.post_visitor');
  const {name, comment} = req.body;
  visitors.post_visitors(req.body, (result) => {
    res.send({id: result, name, comment});
  })
}

exports.patch_visitor = (req, res) => {
  console.log('/controller/Cvisitor.patch_visitor');
  visitors.patch_visitor(req.body, (result) => {
    res.send('Edit success');
  })
}

exports.delete_visitor = (req, res) => {
  console.log('/controller/Cvisitor.delete_visitor');
  visitors.delete_visitor(req.body.id, (result) => {
    res.send('Delete success')
  })
}