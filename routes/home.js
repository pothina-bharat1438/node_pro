
const express = require('express');
const route = express.Router();
const rootdir = require('../services/utils');
const gethomepage = require('../controllers/homecontroller');

route.get('/', gethomepage);



module.exports = route;