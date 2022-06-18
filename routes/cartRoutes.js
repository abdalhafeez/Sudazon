const { Router } = require("express")
const { createUserCart, getUserCart } = require("../controllers/cartController")
const router = Router()
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/", authMiddleware, createUserCart)
router.post("/:userId", authMiddleware, getUserCart)

module.exports = router
