import { BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import Topbar from "./components/Topbar"
import Home from "./views/Home"
 function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
        <Route path="/" element={ <Home/> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
