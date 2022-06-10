import "./styles/home.css"
import Slider from '../components/Slider'
import Categories from "../components/Categories"
import LatestProducts from "../components/LatestProducts"

function Home() {
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