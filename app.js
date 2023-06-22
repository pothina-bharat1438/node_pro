const path = require('path');
const express = require('express');
const app = express();

const routes = require('./routes/routes');
const homeroute = require('./routes/home');

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));

app.use(homeroute);
app.use(routes);
app.use((req,res,next) => {res.status(401).sendFile(path.join(__dirname,'./', 'public','pagenotfound.html'))});


module.exports = app;
