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
  const dispatch = useDispatch();
  const [bigImage, setBigImage] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const tempProduct = prods[0];
  let images = [];
  for (let i = 0; i < 5; i++) {
    images.push(prods[i].image);
  }
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);
  const singleProduct = useSelector((state) => state.singleProduct);
  const { /*loading, errors, */ product } = singleProduct;
  const handleAddOrder = () => {
    // dispatch(addToCartAction(product._id, quantity));
    window.location.replace(`/cart/${product._id}?qant=${quantity}`);
  };
  return (
    <div className="row col-md-11 col-sm-12 single-product-details ">
      <h1>تفاصيل المنتج</h1>
      <div className="images-container col-sm-12 col-md-6 m-auto mt-3 row">
        <div className="big-image col-12  shadow-sm">
          <img src={images[bigImage]} alt="product" />
        </div>
        <div className="small-images col-12 ">
          {images.map((image, index) => (
            <div className="img-container" key={index}>
              <img
                src={image}
                alt="product"
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
          <div className="col-5 col-md-12 main-info">
            <ul className="">
              <li>السعر </li>

              <li> {`ج${tempProduct.price}`}</li>
            </ul>
            <ul className="">
              <li>المتوفر</li>

              <li className="p-auto"> {tempProduct.inStock}</li>
            </ul>
          </div>
          <div className="col-5 col-md-12">
            <ul
              className={`number-of-items ${/*itemsNumBox &&*/ "show-numbers"}`}
            >
              <span className="mb-2">عايز تشتري كم؟</span>
              <select
                name="quantity"
                // defaultValue="1"
                id="quantity"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <button
                onClick={() => handleAddOrder(product._id, quantity)}
                className="cu-btn-cyan px-3 mt-3"
              >
                اشتري
              </button>{" "}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails
