import "./styles/productDetails.css"
import { prods } from "../prods"
import Rating from "../components/Rating"
import { useState } from "react"
import { Link } from "react-router-dom"
function ProductDetails() {
  const [itemsNumBox, setItemsNumBox] = useState(false)
  const [bigImage, setBigImage] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const product = prods[0]
  let images = []
  for (let i = 0; i < 5; i++) {
    images.push(prods[i].image)
  }

  return (
    <div className="row col-md-11 col-sm-12 single-product-details ">
      <div className="images-container col-sm-12 col-md-7 m-auto mt-3 row">
        <div className="big-image col-12  shadow-sm">
          <img src={images[bigImage]} alt="product image" />
        </div>
        <div className="small-images col-12 ">
          {images.map((image, index) => (
            <div className="img-container">
              <img
                src={image}
                alt="product image"
                onClick={(e) => setBigImage(index)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="product-info col-sm-12 col-md-5 mt-md-3 row">
        <div className="col col-md-6 col-sm-12">
          <h4 className="title">{product.title}</h4>
          <Rating />
          <h6 className="price">{product.price}</h6>
          <p className="desc">{product.desc}</p>
        </div>
        <div className="col col-md-5 col-sm-12 mx-auto shadow-sm menu ">
          <ul className="main-info">
            <li>السعر </li>

            <li> {`ج${product.price}`}</li>
          </ul>
          <ul className="main-info">
            <li>المتوفر</li>

            <li> {product.inStock}</li>
          </ul>
          <button onClick={() => setItemsNumBox(!itemsNumBox)} className="btn">
            اشتري
          </button>

          <ul className={`number-of-items ${itemsNumBox && "show-numbers"}`}>
            <span className="mb-2">عايز تشتري كم؟</span>
            <select
              name="quantity"
              // defaultValue="1"
              id="quantity"
              onChange={(e) => {
                setQuantity(e.target.value)
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            {/* <Link exact to="ship" className="link"> */}
          </ul>

          {quantity > 1 && (
            <ul className="actions">
              <li className="add-more">اضافة منتج أخر</li>
              <li className="purchase">اكمال الشراء</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
