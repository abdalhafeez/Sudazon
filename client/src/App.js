import { BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import Topbar from "./components/Topbar"
import Home from "./views/Home"
import ShippingScreen from "./views/ShippingScreen"
function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shipping" element={<ShippingScreen />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
