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
    check("name", "اكتب عنون المنتج").not().isEmpty(),
    check("price", "اكتب السعر").not().isEmpty(),
    check("description", "اكتب وصف للمنتج").not().isEmpty(),
    check("brand", "اختر الماركة").not().isEmpty(),
    check("category", "اختر الصف").not().isEmpty(),
    check("color", "اختر لون المنتج").not().isEmpty(),
    check("size", "اختر لون المقاس").not().isEmpty(),
  ],
  createProduct
);
router.get("/:id", fetchtProductById)
router.put("/:id", authMiddleware, editProduct)
router.delete("/:id", authMiddleware, deleteProduct)
router.get("/", fetchAllProducts)

module.exports = router
