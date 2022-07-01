import "./styles/productDetails.css"
import { prods } from "../prods"
import Rating from "../components/Rating"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../store/actions/productsActions";
import Reviews from "../components/Reviews";
import { PF } from "../utils/axiosInstance";
function ProductDetailsScreen() {
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
  const { loading, errors, product } = singleProduct;
  const handleAddOrder = () => {
    window.location.replace(`/cart/${product._id}?qant=${quantity}`);
  };
  console.log(product);
  return (
    <div className="row col-md-11 col-sm-12 single-product-details ">
      <h1>تفاصيل المنتج</h1>
      {product ? (
        <>
          {" "}
          <div className="images-container col-sm-12 col-md-6 m-auto mt-3 row">
            <div className="big-image col-12  shadow-sm p-3">
              <img
                src={
                  product?.images[bigImage] && PF + product?.images[bigImage]
                }
                alt="product"
              />
            </div>
            <div className="small-images col-12">
              {product?.images?.map((image, index) => {
                return (
                  <div>
                    <img
                      src={PF + image}
                      alt="product"
                      className=""
                      onClick={(e) => setBigImage(index)}
                      key={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product-info col-sm-12 col-md-6 mt-md-3 m-auto row">
            <div className="col col-md-6 col-12">
              <h4 className="title tx-cyan">{tempProduct.name}</h4>

              <Rating />

              <p className="desc">
                {tempProduct.desc} تكتيك على الاختيار بين المنتجات والمستلزمات
                الرياضية من خلال تقديم خدمة ما تكتيك على الاختيار بين المنتجات
                والمستلزمات الرياضية من خلال تقديم خدمة ما
              </p>
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
                  className={`number-of-items ${
                    /*itemsNumBox &&*/ "show-numbers"
                  }`}
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
                    {[...Array(product.inStack).keys()].map((num) => (
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
          </div>{" "}
          <Reviews prods={prods} />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default ProductDetailsScreen;
