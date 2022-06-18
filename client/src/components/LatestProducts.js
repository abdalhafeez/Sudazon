import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../store/actions/productsActions"
import { useEffect, useState } from "react"
import "./styles/latestProducts.css"
import { prods } from "../prods"
function LatestProducts() {
  const [showShop, setShowShop] = useState(null)

  const dispatch = useDispatch()
  const productsRequest = useSelector((state) => state.productsList)
  const { loading, errors, products } = productsRequest
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  const showShopHandler = (prod) => {
    setShowShop(prod.image)
  }
  return (
    <div className="col-md-10 col-sm-12 row latest-products">
      {prods.map((prod) => {
        return (
          <div className="col-md-4 col-sm-12 " key={prod.image}>
            <span
              className="overlay"
              onMouseEnter={() => showShopHandler(prod)}
              onMouseLeave={() => setShowShop(false)}
            >
              {showShop === prod.image && <h5>حذاء رياضي طبي</h5>}
              <li
                className={`bi bi-cart shop ${
                  showShop === prod.image && "show-shop"
                }`}
              ></li>
            </span>
            <img src={prod.image} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default LatestProducts
