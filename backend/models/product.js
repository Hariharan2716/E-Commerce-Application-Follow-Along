const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide the product name"],
        },
        description: {
            type: String,
            required: [true, "Please provide the product description"],
        },
        category: {
            type: String,
            required: [true, "Please provide the product category"],
        },
        tags: {
            type: [String], // Array of tags
            default: [],
        },
        price: {
            type: Number,
            required: [true, "Please provide the product price"],
        },
        stock: {
            type: Number,
            required: [true, "Please provide the product stock"],
        },
        email: {
            type: String,
            required: [true, "Please provide an email"],
            match: [/.+@.+\..+/, "Please provide a valid email address"],
        },
        images: {
            type: [String], // Array of image URLs (base64 or hosted links)
            required: [true, "Please upload product images"],
        },
        createdAt: {
            type: Date,
            default: Date.now, // Automatically set the creation date
        },
        cart: [
            {
                productid: {
                    type: String,
                    required: [true, "Please provide the product ID"],
                    unique: true,
                },
                quantity: {
                    type: Number,
                    required: [true, "Please provide the quantity"],
                    min: [0, "Quantity cannot be negative"],
                },
            },
        ],
    },
    {
        timestamps: true, 
    }
);

module.exports = mongoose.model("Product", productSchema);
=======
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true, "Please provide the product name"],
  },
  description :{
    type: String,
    required: [true, "Please provide the product description"],
  },
  category: {
    type: String,
    required: [true, "Please provide the product category"],
  },
  tags: {
    type: [String],
    default: [],
  },

  price: {
    type: [String],
    default: [true, "Please provide the product price"],
  },
  stock: {
    type: Number,
    required: [true, "Please provide the product stock"],
  },

  email: {
    type: String,
    required: [true, "Pleases provide an email"],
    match: [/.+@.+\..+/, "please provide a valid email address"],
  },
  images: {
    type: [String],
    required: [true, "Please upload product images"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

},
{
  timestamps: true,
}
);

module.exports = mongoose.module("Product", productSchema);

