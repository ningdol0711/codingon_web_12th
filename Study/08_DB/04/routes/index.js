const express = require('express');
const router = express.Router();

const controller = require('../controller/Cvisitors');

router.get('/', controller.main);
router.get('/visitor', controller.visitor);

// post visitor
router.post('/visitor', controller.post_visitor);

//get visitor 1개 조회
router.get('/visitor', controller.visitor);
router.get('/visitor/:id', controller.get_visitor);

// patch visitor 1개 수정
router.patch('/visitor', controller.patch_visitor);

// patch visitor 1개 삭제
router.delete('/visitor', controller.delete_visitor);

module.exports = router;