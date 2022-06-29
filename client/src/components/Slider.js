import "./styles/slider.css"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import Rating from "./Rating"
import { prods } from "../prods"
import { useRef, useState, useEffect } from "react"
import BuyBtn from "./BuyBtn"
function Slider({ products }) {
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
    <div className="slider row col-sm-12 col-md-12">
      {prods.map((prod) => (
        <div
          key={prod.id}
          className="slide row col-12 "
          ref={slideRef}
          style={{ transform: `translateX(${sliderWidth * currentSlide}px)` }}
        >
          {/* THIS CARD SHOW ON LARGE SCREEN */}
          <Card className="col-md-6 col-sm-12 product-details ">
            <Card.Body className="card-align">
              <Card.Title className="tx-coral">{prod.name} </Card.Title>
              {/* <div className="buy-btn-parent">
                <h5 className="brand">حذاء رياضي برقبة منخفضة</h5>
              </div> */}
              <Card.Text className="desc">{prod.desc}</Card.Text>
              <Rating />
            </Card.Body>
            <BuyBtn />
          </Card>
          <Link
            to={`/product-details/${"62ba95c6901ed3caffdf3d51"}`}
            className="col-md-6 col-sm-12 row img-container"
          >
            <div className="d-sm-block d-md-none details-sm ">
              <div className="card-align">
                <div className="align-items">
                  <h6 className="tx-coral">{prod.name} </h6>
                  <Rating />
                </div>
                <small className="text-muted">{prod.desc}</small>
              </div>
            </div>
            <div className="col-12 ">
              <img src={prod.images[1]} alt="product" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Slider