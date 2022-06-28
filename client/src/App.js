import "bootstrap-icons/font/bootstrap-icons.css";
import "./utils/bootstrap.min.css";
import "./index.css";
import "./utils/btns.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Topbar from "./components/Topbar";
import CreateProductScreen from "./views/CreateProductScreen";
import CartScreen from "./views/CartScreen";
import HomeScreen from "./views/HomeScreen";
import ProductDetailsScreen from "./views/ProductDetailsScreen";
import ShippingScreen from "./views/ShippingScreen";
import PaymentMethodScreen from "./views/PaymentMethodScreen";
import OrderSummary from "./views/OrderSummary";
import LoginScreen from "./views/LoginScreen";
import RegisterScreen from "./views/RegisterScreen";
import setAuthToken from "./utils/setAuthToken";
import { useDispatch, useSelector } from "react-redux";
import { userfetchAction } from "./store/actions/userActions";
import Footer from "./components/Footer";
function App() {
  const userInfo = useSelector((state) => state.userInfo);
  const { user } = userInfo;
  setAuthToken(localStorage.getItem("token"));
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userfetchAction());
  }, [dispatch]);

  return (
    <div
      className="App"
      onClick={(e) => {
        e.stopPropagation();
        setShowMenu(false);
      }}
    >
      <Router>
        <Topbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/shipping" element={<ShippingScreen />} />
          <Route
            path="/product-details/:id"
            element={<ProductDetailsScreen />}
          />
          <Route path="/admin/create" element={<CreateProductScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/payment-method" element={<PaymentMethodScreen />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/cart/:id" element={<CartScreen />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
