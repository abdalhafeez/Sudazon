const express = require("express")
const router = express.Router()
const authMiddleware = require("../middlewares/authMiddleware")
const { createOrder } = require("../controllers/ordersController")
const { check } = require("express-validator")

router.post(
  "/",
  [
    authMiddleware,
    [
      check("itemsPrice", "item price is required").not().isEmpty(),
       check("deliveredAt", "deliveredAt date is required").not().isEmpty(),
      check("totalPrice", "totalPrice is required").not().isEmpty(),
      check("paidAt", "paidAt at date is required").not().isEmpty(),
      check("isDelivered", "isDelivered status is required").not().isEmpty(),
      check("isPaid", "isPaid status is required").not().isEmpty(),
    ],
  ],
  createOrder
)

module.exports = router
