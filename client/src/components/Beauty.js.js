import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/productsActions";
import { useEffect, useState } from "react";
import "./styles/latestProducts.css";
import { beauty } from "../prods";
function Beauty() {
  const [showShop, setShowShop] = useState(null);

  const dispatch = useDispatch();
  const productsRequest = useSelector((state) => state.productsList);
  const { loading, errors, products } = productsRequest;
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const showShopHandler = (prod) => {
    setShowShop(prod.image);
  };
  return (
    <div className="col-md-10 col-sm-12 row latest-products shadow-sm  p-3 mt-3">
      <h2 className=" tx-coral latest-products-title">منتجات التجميل</h2>
      {beauty[0].images.map((image) => {
        return (
          <div className="col-md-4 col-sm-5 m-auto  mt-2" key={image}>
            <span
              className="overlay"
              onMouseEnter={() => showShopHandler(image)}
              onMouseLeave={() => setShowShop(false)}
            >
              {showShop === image && <h5>حذاء رياضي طبي</h5>}
              <li
                className={`bi bi-cart shop ${
                  showShop === image && "show-shop"
                }`}
              ></li>
            </span>
            <img className="shadow-sm" src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Beauty;
