const { check } = require("express-validator")
const express = require("express")
const router = express.Router()
const authMiddleware = require("../middlewares/authMiddleware")
const {
  fetchAllProducts,
  createProduct,
  fetchtProductById,
  deleteProduct,
  editProduct,
} = require("../controllers/productsController.js")

router.post(
  "/",
  authMiddleware,
  [
    check("name", "item name is required").not().isEmpty(),
    check("price", "price  is required").not().isEmpty(),
    check("description", "isDelivered status is required").not().isEmpty(),
    check("brand", "brand status is required").not().isEmpty(),
    check("category", "brand status is required").not().isEmpty(),
    check("ratings", "ratings is required").not().isEmpty(),
  ],
  createProduct
)
router.get("/:id", fetchtProductById)
router.put("/:id", authMiddleware, editProduct)
router.delete("/:id", authMiddleware, deleteProduct)
router.get("/", fetchAllProducts)

module.exports = router
