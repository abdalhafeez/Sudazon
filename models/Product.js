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
    images: [String],
    ratings: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [
      {
        user: {
          id: { type: mongoose.Schema.Types.ObjectId },
          name: { type: String },
        },
      },
    ],
  },
  { timestamps: true }
)

module.exports = Product = mongoose.model("Product", productSchema)
