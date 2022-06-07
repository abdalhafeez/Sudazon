import "./styles/slider.css"
import { Card } from "react-bootstrap"
 import Rating from "./Rating"
import {prods} from "../prods"
import { useRef, useState, useEffect } from "react"
function Slider() {
  const [sliderWidth, setSliderWidth] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef()
  useEffect(() => {
    setSliderWidth(slideRef.current.clientWidth)
      const slide = setInterval(() => {
        if (currentSlide === 0) {
          setCurrentSlide(currentSlide + 1)
        }
        if (currentSlide < prods.length - 1) {
          setCurrentSlide(currentSlide + 1)
        }
        if (currentSlide === prods.length - 1) {
          setCurrentSlide(0)
        }
        clearInterval(slide)
      }, 5000)
  },[currentSlide])
 
  return (
    <div className="slider row col-12 col-md-12">
      {prods.map((prod) => (
        <div
          className="slide row col-12 "
          ref={slideRef}
          style={{ transform: `translateX(${sliderWidth * currentSlide}px)` }}
        >
          <Card className="col-md-6 col-sm-12 product-details ">
            <Card.Body className="card-align ">
              <Card.Title className="text-light">{prod.title} </Card.Title>
              <div className="buy-btn-parent">
                <h5 className="brand">Nike - نايكي</h5>
              </div>
              <Card.Text className="desc">{prod.desc}</Card.Text>
              <button className="shop-btn">اشتري</button>
              <Rating />
            </Card.Body>
          </Card>
          <div className="col-md-6 col-sm-12 img-container ">
            <img src={prod.image} alt="image" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Slider