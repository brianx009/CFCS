const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        
        img: { type: String, required: true },
         productsUpdate
        categories: { type: Array },
        size: { type: String },
        color: { type: String },
        price: { type: Number, required: true },
        inStock: { type: Boolean, default: true },
       
        size: { type: Array },
        color: { type: Array },
       
        
       main
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
