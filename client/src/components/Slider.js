import "./styles/slider.css"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import Rating from "./Rating"
import { prods } from "../prods"
import { useRef, useState, useEffect } from "react"
import BuyBtn from "./BuyBtn"
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
  }, [currentSlide])

  return (
    <div className="slider row col-12 col-md-12">
      {prods.map((prod) => (
        <div
          key={prod.id}
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
              <Rating />
            </Card.Body>
            <BuyBtn />
          </Card>
          <Link
            to="product-details"
            className="col-md-6 col-sm-12 row img-container"
          >
            <div className="col-12 ">
              <img src={prod.image} alt="image" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Slider