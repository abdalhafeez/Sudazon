import "./styles/productDetails.css"
import { prods } from "../prods"
import Rating from "../components/Rating"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchSingleProduct } from "../store/actions/productsActions"
import { addToCartAction } from "../store/actions/cartAction"
function ProductDetails() {
  const history = useLocation()
  const id = history.pathname.split("/")[2]
  const dispatch = useDispatch()
  const [itemsNumBox, setItemsNumBox] = useState(false)
  const [bigImage, setBigImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const tempProduct = prods[0]
  let images = []
  for (let i = 0; i < 5; i++) {
    images.push(prods[i].image)
  }
  useEffect(() => {
    dispatch(fetchSingleProduct(id))
  }, [dispatch])
  const singleProduct = useSelector((state) => state.singleProduct)
  const { loading, errors, product } = singleProduct

  const handleAddOrder = () => {
    dispatch(addToCartAction(product._id, quantity))
    // window.location.replace(`/shoppingCart/${product._id}?qant=${quantity}`)
  }
  return (
    <div className="row col-md-11 col-sm-12 single-product-details ">
      <h1>تفاصيل المنتج</h1>
      <div className="images-container col-sm-12 col-md-6 m-auto mt-3 row">
        <div className="big-image col-12  shadow-sm">
          <img src={images[bigImage]} alt="product image" />
        </div>
        <div className="small-images col-12 ">
          {images.map((image, index) => (
            <div className="img-container" key={index}>
              <img
                src={image}
                alt="product image"
                onClick={(e) => setBigImage(index)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="product-info col-sm-12 col-md-6 mt-md-3 row">
        <div className="col col-md-6 col-12">
          <h4 className="title">{tempProduct.title}</h4>
          <Rating />
          <h6 className="price">{tempProduct.price}</h6>
          <p className="desc">{tempProduct.desc}</p>
        </div>
        <div className="col col-md-5 col-12 mx-auto shadow-sm menu row">
          <div className="col-5 col-md-12">
            <ul className="main-info">
              <li>السعر </li>

              <li> {`ج${tempProduct.price}`}</li>
            </ul>
            <ul className="main-info">
              <li>المتوفر</li>

              <li className="p-auto"> {tempProduct.inStock}</li>
            </ul>
          </div>
          <div className="col-5 col-md-12">
            <button
              onClick={() => setItemsNumBox(!itemsNumBox)}
              className="btn"
            >
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
                  handleAddOrder()
                }}
              >
                <option value="1" onClick={handleAddOrder}>
                  1
                </option>
                <option value="2" onClick={handleAddOrder}>
                  2
                </option>
                <option value="3" onClick={handleAddOrder}>
                  3
                </option>
                <option value="4" onClick={handleAddOrder}>
                  4
                </option>
              </select>
              {/* <Link exact to="ship" className="link"> */}
            </ul>

            {quantity > 0 && (
              <ul className="actions">
                <li className="add-more">اضافة منتج أخر</li>
                <Link
                  to={`/shopping-cart/${product._id}?quantity=${quantity}`}
                  className="link"
                >
                  <li className="purchase">اكمال الشراء</li>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
