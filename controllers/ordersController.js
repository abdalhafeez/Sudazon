const Order = require("../models/Order")
const { validationResult } = require("express-validator")

const createOrder = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(401).json(errors)
  }
  const {
    orderedItems,
    shippingAdress,
    paymentMethod,
    paymentResult,
    shippingPrice,
    itemsPrice,
    totalPrice,
  } = req.body
  // if (orderedItems && orderedItems.length === 0) {
  //   return res.status(401).json({ msg: "No Items!" })
  // }
  const orderObj = {}
  if (orderedItems) orderObj.orderedItems = orderedItems
  if (shippingAdress) orderObj.shippingAdress = shippingAdress
  if (paymentMethod) orderObj.paymentMethod = paymentMethod
  if (paymentResult) orderObj.paymentResult = paymentResult
  if (shippingPrice) orderObj.shippingPrice = shippingPrice
  if (itemsPrice) orderObj.itemsPrice = itemsPrice
  if (totalPrice) orderObj.totalPrice = totalPrice
  orderObj.user = req.user.id
  const newOrder = new Order(orderObj)
  //@ reduce the amount is the stock
  // get the number of purchased items
  const purchasedItemsNum = newOrder.orderedItems.length
  console.log(purchasedItemsNum)
  // Product.findById(newOrder.orderedItems[purchasedItemsNum]._id)
  const order = await newOrder.save()
  for (let i = 0; i < order.orderItems; i++) {
    const item = order.orderItems[i]
    console.log(item)
    // const product = await Product.findById(item.product)
    // product.countStock -= item.quantity
    // await product.save()
  }
  res.json(order)
}

module.exports = {
  createOrder,
}
