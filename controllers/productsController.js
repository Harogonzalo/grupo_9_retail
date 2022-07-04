const productsController = {
    productDetail: (req, res) => {
        res.render('products/productDetail');
    },

    productCart: (req, res) => {
         res.render('products/productCart');
    },
}

module.exports = productsController;