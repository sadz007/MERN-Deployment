const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
    title: {
        type:String,
        required:[true,'Title Is Required'],
        minLength:[3,'Minimum 3 Characters'],
    },
    price: {
        type:Number,
        required:[true,'Number Is Required'],
        min:[1,'Minimum $1 Price'],
    },
        
    description: {
        type:String,
        required:[true,'Information Is Required'],
        minLength:[10,'Minimum 10 Characters'],
    }
    },
    {timestamps: true},
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;