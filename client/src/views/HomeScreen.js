import "./styles/home.css"
import Slider from "../components/Slider"
import Categories from "../components/Categories";
import Search from "../components/Search";
import { fetchProducts } from "../store/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import Products from "../components/Products";
import Footer from "../components/Footer";

function Home() {
  const dispatch = useDispatch();
  const productsRequest = useSelector((state) => state.productsList);
  const { loading, errors, products } = productsRequest;
  const [screenWidth, setScreenWidth] = useState(0);
  // console.log(products)
  const homeRef = useRef();
  useEffect(() => {
    setScreenWidth(homeRef.current.clientWidth);
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="home row" ref={homeRef}>
      <div className="col-12 search-wrapper  d-m-block d-sm-block  d-md-none d-lg-none d-xl-none">
        <Search />
      </div>
      <Slider products={products} />
      <Categories screenWidth={screenWidth} />
      <Products products={products} />
      {/* <Footer /> */}
    </div>
  );
}

export default Home
