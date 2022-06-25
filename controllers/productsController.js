const { validationResult } = require("express-validator")
const Product = require("../models/Product")

// //
const createProduct = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() });
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
      color: req.body.color,
      inStack: req.body.inStack,
      size: req.body.size,
    });
    await newProduct.save()
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(500).json({ msg: "Server Error" })
  }
}
// //
const deleteProduct = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    if (user.isAdmin) {
      const productToRemove = await Product.findOneAndRemove({
        _id: req.params.id,
      })
      if (!productToRemove)
        return res.status(400).json({ msg: "تم حذف هذا المنتج لسفا" })
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
    if (!product) {
      res.status(404).json({ errors: { msg: "عذرا هذا المنتج غير متاح" } })
    }
    return res.status(200).json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Server Error" })
  }
}
// fetch all product
const fetchAllProducts = async (req, res) => {
  let queryCategory = req.query.category
  let products
  try {
    queryCategory
      ? (products = await Product.find({ category: queryCategory }))
      : (products = await Product.find())
    res.status(200).json(products)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Server Error" })
  }
}
module.exports = {
  fetchAllProducts,
  createProduct,
  fetchtProductById,
  editProduct,
  deleteProduct,
}
