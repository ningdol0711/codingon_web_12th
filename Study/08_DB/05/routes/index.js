const express = require('express');
const router = express.Router();

const controller = require('../controller/Cvisitor');

// 첫화면
router.get('/', controller.main);

// 첫 화면에서 방명록으로 이동
router.get('/visitor', controller.allVisitorsList);

// 방명록에서 사용자 추가
router.post('/addVisitor', controller.addVisitor);

// 방명록 목록중 수정 버튼을 선택 하였을 때
router.get('/visitormodify/:id', controller.getShowVisitor);

// 수정버튼 변경버튼 선택한 목록의 내용을 바꿀때
router.patch('/visitoreditDo', controller.patchVisitor);

router.delete('/visitordelete', controller.deleteVisitor);

module.exports = router;