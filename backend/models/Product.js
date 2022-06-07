const mongoose = require("mongoose")
const productSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      required: true,
      type: String,
    },
    category: {
      required: true,
      type: String,
    },
    brand: {
      required: true,
      type: String,
    },
    Image: {
      required: true,
      type: String,
    },
    ratings: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
)

module.exports = Product = mongoose.model("Product", productSchema)
