import { BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import Topbar from "./components/Topbar"
import Home from "./views/Home"
import ProductDetails from "./views/ProductDetails"
import ShippingScreen from "./views/ShippingScreen"
function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ship" element={<ShippingScreen />} />
          <Route exact path="/product-details" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
