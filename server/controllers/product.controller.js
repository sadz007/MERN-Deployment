const  Product = require('../models/product.model');

// Get ALL Products

const getAllProducts = (req, res) => {
    Product.find({})
        .then((allProducts)=> res.json(allProducts))
        .catch((error)=>{
            res.status(400).json({error})
        })
};

// Get One Product With ID 

const getOneProductWithID =(req, res)=>{
    Product.findOne({ _id: req.params.id })
        .then((productId)=>res.json(productId))
        .catch((error)=>{
            res.status(400).json({error})
        })
};
// Creat New Product ///

const createNewProduct = (req, res) => {
    const {body} =req;
    Product.create(body)
        .then((createNewProduct) =>res.json(createNewProduct))
        .catch((error)=>{
            res.status(400).json({error})
        })
};
// UPDATE New Product///

const UpdateProduct = (req, res) =>{
    Product.findOneAndUpdate({_id: req.params.id}, 
        req.body,
        {
            new:true,
            runValidators: true
        })
        .then( ( updateProduct)=>res.json(updateProduct))
        .catch((error)=>{
            res.status(400).json({error})
        })
}


const DeleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id})
        .then ((deleteproduct)=>res.json(deleteproduct))
        .catch((error)=>{
            res.status(400).json({error})
        })
}





module.exports ={
    getAllProducts,
    getOneProductWithID,
    createNewProduct,
    UpdateProduct,
    DeleteProduct
}