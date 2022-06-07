import "./styles/home.css"
import Slider from '../components/Slider'
import Categories from "../components/Categories"
import LatestProducts from "../components/LatestProducts"
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../store/actions/productsActions"
import { useEffect } from "react"

function Home() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.productsList)
  console.log(products)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="home row pb-3">
      {" "}
      <Slider />
      <Categories />
      <div className="latest-products-title col-9 mt-5 row">أخر الموضات</div>
      <LatestProducts />
    </div>
  )
}

export default Home