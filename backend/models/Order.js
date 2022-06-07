const mongoose = require("mongoose")
const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderedItems: [
      {
        price: {
          type: Number,
          required: true,
          default: 0,
        },
        image: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 0,
        },
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAdress: {
      address: { type: String, required: true },
      postalCode: { type: Number, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true, default: "Sudan" },
    },
    paymentMethod: { type: String, required: true },
    paymentResulut: {
      Id: { type: String, required: true },
      status: { type: String, required: true },
      updateTime: { type: String, required: true },
      emailAdress: { type: String, required: true },
    },
    shippingPrice: {
      type: Number,
      require: true,
      default: 0.0,
    },
    itemsPrice: {
      type: Number,
      require: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      require: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      require: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      require: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
)

module.exports = Order = mongoose.model("Order", orderSchema)
