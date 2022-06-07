const Product = require("../models/Product")

// //
const createProduct = async (req, res) => {
  const { name, price, description, brand, Image, ratings, reviews } = req.body

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      brand,
      Image,
      ratings,
      reviews,
    })
    // await newProduct.save()
    res.status(201).json(newProduct)
  } catch (error) {
    res.json({ errors: { msg: "Server Error" } })
  }
}
// //
const deleteProduct = async (req, res) => {
  console.log("log in user")
}
// //
const editProduct = async (req, res) => {
  console.log("log in user")
}
// //
const fetchtProductById = async (req, res) => {
  console.log("log in user")
}
//
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
