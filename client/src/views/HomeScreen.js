import "./styles/home.css"
import Slider from "../components/Slider"
import Categories from "../components/Categories";
import Search from "../components/Search";
import { fetchProducts } from "../store/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Shoes from "../components/Shoes";
import Beauty from "../components/Beauty.js";

function Home() {
  const dispatch = useDispatch();
  const productsRequest = useSelector((state) => state.productsList);
  const { loading, errors, products } = productsRequest;
  // console.log(products)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="home row pb-3">
      <div className="col-12 d-none .d-sm-block "></div>
      {/* <Search /> */}
      <Slider products={products} />
      <Categories />
      <Shoes products={products} />
      <Beauty products={products} />
    </div>
  );
}

export default Home
