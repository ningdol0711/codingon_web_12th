const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

router.get('/', controller.main);
router.get('/visitor', controller.allVisitors);
router.post('/addUser', controller.addVisitor);
router.get('/visitormodify/:id`', controller.getVisitor);
router.patch('/visitordoEdit', controller.patchVisitor);
router.delete('/deleteVisitor', controller.delVisitor);

module.exports = router;