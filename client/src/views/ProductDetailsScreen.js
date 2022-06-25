import "./styles/productDetails.css"
import { prods } from "../prods"
import Rating from "../components/Rating"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../store/actions/productsActions";
function ProductDetails() {
  const history = useLocation();
  const id = history.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [bigImage, setBigImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const tempProduct = prods[0];

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);
  const singleProduct = useSelector((state) => state.singleProduct);
  const { /*loading, errors, */ product } = singleProduct;
  const handleAddOrder = () => {
    window.location.replace(`/cart/${product._id}?qant=${quantity}`);
  };

  let inStack = [];
  for (let i = 0; i < product.inStack; i++) {
    inStack.push(i);
  }
  console.log(inStack);
  return (
    <div className="row col-md-11 col-sm-12 single-product-details ">
      <h1>تفاصيل المنتج</h1>
      <div className="images-container col-sm-12 col-md-6 m-auto mt-3 row">
        <div className="big-image col-12  shadow-sm">
          <img src={prods[1].images[bigImage]} alt="product" />
        </div>
        <div className="small-images col-12">
          {prods[1].images?.map((image, index) => (
            <img
              src={image}
              alt="product"
              className=""
              onClick={(e) => setBigImage(index)}
              key={index}
            />
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
                {inStack.splice(1, inStack.length).map((num) => (
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
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
