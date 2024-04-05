const comment = require('../model/Comments');

exports.main = (req, res) => {
  res.render('index');
}

exports.comments = (req, res) => {
  res.render('comments', {comments: comment.comments()});
}

exports.comment = (req ,res) => {
  res.render('comment', {comment: comment.comments()[req.params.id-1]});
}