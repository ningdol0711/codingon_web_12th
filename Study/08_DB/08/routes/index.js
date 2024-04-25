const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.main);
router.get('/visitor', controller.visitor);
router.get('/selectVisitor/:id', controller.selectVistor);
router.post('/addUser', controller.addVisitor);
router.patch('/patchVisitor', controller.editVisitor);
router.delete('/deleteVisitor', controller.deleteVisitor);

module.exports = router;