const path = require('path');
const express = require('express');
const route = express.Router();
const rootdir = require('../services/utils');

const getaddproductpage = require('../controllers/productcontroller');
const addproductpage = require('../controllers/productcontroller');



route.get('/users', (req,res,next) => { res.send(`this is the users page`)});

route.get('/css/main.css', (req,res,next) => {res.sendFile(path.join(rootdir,'public','css','main.css'))});

route.get('/add', getaddproductpage);
    

route.post('/add', addproductpage);


module.exports = route;