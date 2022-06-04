import image from "../assets/3.jpeg"
import "./styles/latestProducts.css"
import {prods} from "../prods"
function LatestProducts() {
  return (
      <div className="col-10 row latest-products">
          {prods.map(prod => {
              return (
              
               <div className="col-md-4 col-sm-12">
          <span className="overlay"></span>
        <img src={prod.image} alt="" />
      </div>)
           
          })}
     
     
    </div>
  )
}

export default LatestProducts
