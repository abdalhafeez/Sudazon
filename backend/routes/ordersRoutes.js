const express = require("express")
const router = express.Router()
const authMiddleware = require("../middlewares/authMiddleware")
const { createOrder } = require("../controllers/ordersController")

router.post("/", authMiddleware, createOrder)

module.exports = router
