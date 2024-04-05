const express = require('express');
const route = express.Router();

const controller = require('../controller/Customer');

route.get('/', controller.cust);

module.exports = route;