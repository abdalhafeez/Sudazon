const Order = require("../models/Product")

const createOrder = (req, res) => {
  const {
    orderedItems,
    shippingAdress,
    paymentMethod,
    shippingPrice,
    itemsPrice,
    totalPrice,
  } = req.body
  if (orderedItems && orderedItems.length === 0) {
    return res.status(401).json({ msg: "No Items!" })
  }
  const order = new Order({
    // user: req.user.id,
    orderedItems,
    shippingAdress,
    paymentMethod,
    shippingPrice: 88,
    itemsPrice,
    totalPrice,
  })
  res.status(201).json(order)
}

module.exports = {
  createOrder,
}
