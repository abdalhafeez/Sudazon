import "./styles/home.css"
import Slider from '../components/Slider'
import Categories from "../components/Categories"
import LatestProducts from "../components/LatestProducts"
import Search from "../components/Search"

function Home() {
  return (
    <div className="home row pb-3">
      <div className="col-12 d-none .d-sm-block "></div>
      <Search />
      <Slider />
      <Categories />
      <div className="latest-products-title col-9 mt-5 row">أخر الموضات</div>
      <LatestProducts />
    </div>
  )
}

export default Home