const products = require('../models/products');

module.exports = gethomepage = (req,res,next) => {
    const viewsdata = {
        productsdata : products.products,
        productTitle : 'home page - products list'
    };
    res.render('homepage',viewsdata);
};