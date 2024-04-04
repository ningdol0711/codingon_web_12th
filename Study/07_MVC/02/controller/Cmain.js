const comment = require('../model/Comments');

exports.main = (req, res) => {
  res.render('index');
}

exports.Comments = (req, res) => {
  res.render('comments', {Comments: comment.commentInfo()});
}

exports.Comment = (req, res) => {
  res.render('comment', {Comment: comment.commentInfo()[req.params.id - 1]});
}