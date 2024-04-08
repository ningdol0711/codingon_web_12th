const visitor = require('../model/Visitors');

exports.main = (req, res) => {
  res.render('index');
}

exports.allVisitorsList = (req, res) => {
  console.log('controller/Cvisitor.allVisitorsList');
  visitor.allVisitorsList(result => {
    res.render('visitor', {data: result});
  });
}

exports.addVisitor = (req, res) => {
  console.log('controller/Cvisitor.addVisitor');
  const {name, comment} = req.body;
  visitor.postAddVisitor(req.body, (result) => {
    const data = {id: result, name, comment};
    console.log(data);
    res.send({data: data});
  });
}

exports.getShowVisitor = (req, res) => {
  console.log("Cvisitor  > 1명 선택 : ", req.params.id, req.params);
  visitor.getShowVisitor(req.params.id, (result) =>{
    console.log("getShowAvisitor" , req.params.id);
    res.send(result);
  })
}

exports.patchVisitor = (req, res) => {
  console.log('수정버튼 클릭 후 ', req.body);
  visitor.patchContent(req.body, (result)=>{
    res.send(result);
  })
}

exports.deleteVisitor=(req,res)=>{
  console.log('삭제버튼 후 ',req.body.id)
  visitor.deletedb(req.body.id, (result)=>{
    res.send('삭제성공')
  })
}