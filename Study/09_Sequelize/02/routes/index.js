const express = require('express');
const router = express.Router();

const controller = require('../controller/Cvisitor');

router.get('/', controller.main);
router.get('/visitors', controller.allVisitorList);
router.post('/addVisitor', controller.addVisitor);
router.get('/visitormodify/:id', controller.getShowAVisitor);
router.patch('/visitoreditDo', controller.patchVisitor);
router.delete('/visitordelete', controller.deleteVisitor);

module.exports = router;