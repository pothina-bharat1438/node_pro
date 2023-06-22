const path = require('path');
const express = require('express')
const route = express.Router();


route.get('/users', (req,res,next) => { res.send(`this is the users page`)});

route.get('/user/add', (req,res,next) => {res.sendFile(path.join(__dirname, '../','public','user.html'))});

route.post('/user/add', (req,res,next) => {console.log(req.body); res.redirect('/')});

module.exports = route;