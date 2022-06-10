const { validationResult } = require("express-validator")
const Product = require("../models/Product")

// //
const createProduct = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.log(errors)
    return res.status(401).json({ errors: errors.array() })
  }
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      brand: req.body.brand,
      images: req.body.images,
      ratings: req.body.ratings,
      reviews: req.body.reviews,
    })
    await newProduct.save()
    console.log(newProduct)
    res.status(201).json(newProduct)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: "Server Error" })
  }
}
// //
const deleteProduct = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    if (user.isAdmin) {
      const productToRemove = await Product.findOneAndRemove({ _id: req.params.id })
      if(!productToRemove) return res.status(400).json({msg:"تم حذف هذا المنتج لسفا"})
      res.status(200).json({ smg: "تم حذف المنتج بنجاح!" })
    } else {
      res.status(401).json({ msg: "Not authorized" })
    }
  } catch (error) {
    res.status(500).json({ msg: "Server Error" })
  }
}
// //
const editProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
    res.status(200).json({ msg: "تم تحديث بيانات المنتج بنجاح" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Server Error" })
  }
}
// //
const fetchtProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id })
    if (product) {
      return res.status(200).json(product)
    }
    res.status(404).json({ errors: { msg: "عذرا هذا المنتج غير متاح" } })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Server Error" })
  }
}
// fetch all product
const fetchAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    console.log(products)
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ errors: { msg: "Server Error" } })
  }
}
module.exports = {
  fetchAllProducts,
  createProduct,
  fetchtProductById,
  editProduct,
  deleteProduct,
}
