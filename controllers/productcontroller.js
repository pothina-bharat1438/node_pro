const addproduct = require('../models/products');



module.exports= getAddProductPage = (req,res) => {
    const viewsdata = {
        pagetitle : 'Add Product'
    };
    res.render('AddProduct',viewsdata);
};


module.export = AddProductdPage = (req,res) => {
    const product = {
        title: req.body.title
    };
    addproduct.addproduct(product);
     res.redirect('/')};