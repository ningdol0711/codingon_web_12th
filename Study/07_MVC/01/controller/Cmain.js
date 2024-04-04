const Comment = require('../model/Comments');
exports.main = (req, res) => {
  console.log('controller > main : ');
  res.render('index');
}

exports.comments = (req, res) => {
  console.log('controller > comments');
  res.render('comments', {commentInfos: Comment.commentInfo()});
}

exports.comment = (req, res) => {
  console.log('controller > comment');
  console.log(req.params.id);
  const comments = Comment.commentInfo();
  const commentId = req.params.id;
  res.render('comment', {commentInfo: comments[commentId - 1]});
}