const Cart = require("../models/Cart")

const createUserCart = async (req, res) => {
  try {
    const cart = new Cart(req.body)
    res.status(200).json(cart)
  } catch (error) {
    console.error(error)
    res.status(500).json("Server Error")
  }
}

const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id })
    res.status(200).json(cart)
  } catch (error) {
    console.error(error)
    res.status(500).json("Server Error")
  }
}

module.exports = {
  getUserCart,
  createUserCart,
}
