import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../store/actions/productsActions"
import { useEffect } from "react"
import "./styles/latestProducts.css"
import { prods } from "../prods"
function LatestProducts() {
  const dispatch = useDispatch()
  const productsRequest = useSelector((state) => state.rootReducer.productsList)
  const { loading, errors, products } = productsRequest
  console.log(products)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="col-md-10 col-sm-12 row latest-products">
      {prods.map((prod) => {
        return (
          <div className="col-md-4 col-sm-12" key={prod.image}>
            <span className="overlay"></span>
            <img src={prod.image} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default LatestProducts
