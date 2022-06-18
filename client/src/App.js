import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Topbar from "./components/Topbar"
import CreateProductScreen from "./views/CreateProductScreen"
import CartScreen from "./views/CartScreen"
import HomeScreen from "./views/HomeScreen"
import ProductDetailsScreen from "./views/ProductDetailsScreen"
import ShippingScreen from "./views/ShippingScreen"
import PaymentMethodScreen from "./views/PaymentMethodScreen"
import OrderSummary from "./views/OrderSummary"
import LoginScreen from "./views/LoginScreen"
function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div
      className="App"
      onClick={(e) => {
        e.stopPropagation()
        setShowMenu(false)
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
          <Route path="/payment-method" element={<PaymentMethodScreen />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/shopping-cart/:id" element={<CartScreen />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
