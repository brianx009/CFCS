const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        
        img: { type: String, required: true },
       
        size: { type: Array },
        color: { type: Array },
       
        
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
