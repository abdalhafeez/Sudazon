import "./styles/shipping.css"
import { useState } from "react"
import { Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import CheckOutLine from "../components/CheckOutLine"
import { useLocation } from "react-router-dom"
import { saveShippingAdress } from "../store/actions/cartAction"
function ShippingScreen() {
  const shippingAddress = useSelector((state) => state.cart.shippingAddress)
  const dispatch = useDispatch()
  const location = useLocation()
  console.log(location)
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [country, setCountry] = useState(shippingAddress.country)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [phone, setPhone] = useState(shippingAddress.phone)
  const submitForm = (e) => {
    e.preventDefault()
    const body = { address, city, phone, country, postalCode }
    dispatch(saveShippingAdress(body))
    window.location.replace("/payment-method")
  }
  return (
    <div className=" row shipping-screen pt-5">
      <CheckOutLine step1 step2 />
      <Form
        className="col-md-7 col-sm-11 m-auto card p-3"
        onSubmit={submitForm}
      >
        <h3 className=" text-center text-dark">تفاصيل الشحن</h3>
        <Form.Group>
          <Form.Label className="mt-3">العنوان</Form.Label>
          <Form.Control
            autoCompete="off"
            type="text"
            name="address"
            defaultValue={address}
            required
            placeholder="اوصف عنوانك الحالي"
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-3">المدينة</Form.Label>
          <Form.Control
            type="text"
            name="city"
            defaultValue={city}
            required
            placeholder="ادخل اسم مدينتك الحالية"
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className="mt-3">الدولة</Form.Label>
          <Form.Control
            type="text"
            name="country"
            defaultValue={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-3">رقم الهاتف</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="رقمك هاتفك"
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className="mt-3">رمزالبريد</Form.Label>
          <Form.Control
            type="text"
            defaultValue={phone}
            name="postalCode"
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="رمز البريد "
          ></Form.Control>
        </Form.Group>
        <button type="submit">التالي</button>
      </Form>
    </div>
  )
}

export default ShippingScreen
