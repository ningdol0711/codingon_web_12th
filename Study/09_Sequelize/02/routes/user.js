const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/signin', controller.getSignin);
router.get('/signup', controller.getSignup);

router.post('/signin', controller.postSignin);
router.post('/signup', controller.postSignup);
router.post('/profile', controller.postProfile);

router.patch('/profile/edit', controller.editProfile);

router.delete('/profile/delete', controller.deleteProfile);

module.exports = router;