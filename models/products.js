const products = [{title: 'product 1'},{title: 'product 2'}];

const addproduct = (product)=> {
    products.push(product);
}

module.exports = {products, addproduct};