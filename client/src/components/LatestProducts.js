import { useEffect } from "react"
import axios from "axios"
import "./styles/latestProducts.css"
import { prods } from "../prods"
function LatestProducts() {
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/products")
      console.log(res)
    }
  })
  return (
    <div className="col-10 row latest-products">
      {prods.map((prod) => {
        return (
          <div className="col-md-4 col-sm-12" key={prod.image}>
            <span className="overlay"></span>
            <img src={prod.image} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default LatestProducts
