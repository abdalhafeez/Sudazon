import "./styles/createProduct.css"
import React, { useState } from "react"
import { Form, Row, Col } from "react-bootstrap"
function CreateProduct() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [brand, setBrand] = useState("")
  const [images, setImages] = useState([])
  const [ratings, setRatings] = useState(0)
  // const [reviews, setReviews] = useState("")
  const createProductHandler = async (e) => {
    e.preventDefault()
    const body = {
      name,
      price,
      description,
      category,
      brand,
      images,
      ratings,
      reviews: [],
    }
    try {
      // const res = await axios.post("/products", body)
      console.log(body)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=" row create-product pt-5">
      <div className="mt-3"></div>
      <Form
        autocompete="off"
        className="col-md-7 col-sm-11 m-auto card p-3"
        onSubmit={createProductHandler}
      >
        <h3 className=" text-center text-dark">اضافة منتج</h3>
        <Form.Group>
          <Form.Label className="mt-3">اسم المنتج</Form.Label>
          <Form.Control
            autoCompete="off"
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            required
            placeholder="اوصف عنوانك الحالي"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-3">وصف للمنتج</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            required
            placeholder="اكتب وصف للمنتج"
          ></Form.Control>
        </Form.Group>
        <div className="row"></div>
        <div className="row"></div>
        <Row>
          {" "}
          <Form.Group className="mt-3 col-md-6 col-sm-12 m-auto">
            <Form.Label className="mt-3 col-md-6 col-sm-12 m-auto">
              ماركة المنتج
            </Form.Label>
            <Form.Select
              type="text"
              onChange={(e) => setBrand(e.target.value)}
              name="brand"
            >
              <option value="1">نايكي</option>
              <option value="2">اديداس</option>
              <option value="3">ميسي</option>
              <option value="3">شوت</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mt-3 col-md-6 col-sm-12 m-auto">
            <Form.Label className="mt-3 col-md-6 col-sm-12 m-auto">
              نوع الصنف
            </Form.Label>
            <Form.Select
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              name="brand"
              aria-label="Default select"
            >
              <option value="1">رجالي</option>
              <option value="2">نسائي</option>
              <option value="3">شبابي</option>
              <option value="3">اطفالي</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          {" "}
          <Form.Group className="mt-3 col-md-6 col-sm-12 m-auto">
            <Form.Label className="mt-3">
              سعر المنتج بالجنيه السوداني
            </Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              name="price"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mt-3 col-md-6 col-sm-12 m-auto">
            <Form.Label className="mt-3">اضف صور للمنتج</Form.Label>
            <Form.Control
              type="file"
              multiple
              onChange={(e) => setImages(e.target.value)}
              name="images"
            ></Form.Control>
          </Form.Group>
        </Row>
        <div className="align-items">
          {/* <button className="btn  btn-dark">الغاء</button> */}
          {/* <span></span> */}
          <button className="btn btn-success ms-1 me-auto mt-3" type="submit">
            اضافة
          </button>
        </div>
      </Form>
    </div>
  )
}

export default CreateProduct
