const ProductController = require('../controllers/product.controller');

module.exports = (app)=> {
    app.get('/api/product', ProductController.getAllProducts),
    app.post('/api/product', ProductController.createNewProduct),
    app.get('/api/product/:id', ProductController.getOneProductWithID)
    app.put('/api/product/:id', ProductController.UpdateProduct)
    app.delete('/api/product/:id', ProductController.DeleteProduct)
};