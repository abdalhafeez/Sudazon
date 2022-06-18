const mongoose = require("mongoose")
const cartSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    product: {
      productId: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  },
  { timestamps: true }
)

module.exports = Cart = mongoose.model("Cart", cartSchema)
