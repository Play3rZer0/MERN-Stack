import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }, 
}, {
    timestamps: true   // adds the fields createdAt, updatedAt 
});

const Product = mongoose.model('Product', productSchema); //MongoDB will call this products

export default Product;