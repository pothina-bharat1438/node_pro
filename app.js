const path = require('path');
const express = require('express');
const ejs = require('ejs');
const app = express();
const rootdir = require('./services/utils');
const bodyparser = require('body-parser');

const routes = require('./routes/addproducts');
const homeroute = require('./routes/home');

app.set('view engine', 'ejs');
app.set('views', 'public');

app.use(express.static(path.join(rootdir,'public')));
app.use('/css',express.static(path.join(rootdir,'node_modules','bootstrap','dist','css')));


app.use(bodyparser.urlencoded({extended: false}));

app.use(homeroute);
app.use('/products',routes);
app.use((req,res) => {const viewsdata = {title:"page not"};
    res.status(401).render('pagenotfound', viewsdata)});




module.exports = app;
