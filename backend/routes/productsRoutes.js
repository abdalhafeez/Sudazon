
const express = require("express")
const router = express.Router()
    const authMiddleware = require("../middlewares/authMiddleware.js")
    const {
      fetchAllProducts,
      createProduct,
      fetchtProductById,
      deleteProduct,
      editProduct,
    } = require("../controllers/productsController.js")

    router.post("/", authMiddleware, createProduct)
    router.get("/:id", fetchtProductById)
    router.put("/:id", editProduct)
    router.delete("/:id", deleteProduct)
    router.get("/", fetchAllProducts)

module.exports = router

