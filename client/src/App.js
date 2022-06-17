import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Topbar from "./components/Topbar"
import CreateProduct from "./views/Admin/CreateProduct"
import CartScreen from "./views/CartScreen"
import Home from "./views/Home"
import ProductDetails from "./views/ProductDetails"
import ShippingScreen from "./views/ShippingScreen"
function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div
      className="App"
      onClick={(e) => {
        e.stopPropagation()
        setShowMenu(false)
        console.log(showMenu)
      }}
    >
      <Router>
        <Topbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ship" element={<ShippingScreen />} />
          <Route
            exact
            path="/product-details/:id"
            element={<ProductDetails />}
          />
          <Route exact path="/admin/create" element={<CreateProduct />} />
          <Route exact path="/shoppingCart" element={<CartScreen />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
