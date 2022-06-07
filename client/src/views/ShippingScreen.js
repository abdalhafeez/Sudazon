import "./styles/shipping.css"
import { useState } from "react"
import { Form } from "react-bootstrap"
function ShippingScreen() {
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const submitForm = (e) => {
    e.preventDefault()
    const body = { address, city, country, postalCode }
    console.log(body)

    setAddress("")
    setCity("")
    setCountry("")
    setPostalCode("")
  }
  return (
    <div className=" row shipping-screen pt-5">
      <div className="mt-3"></div>
      <Form
        autoCompete="off"
        className="col-md-7 col-sm-11 m-auto card p-3"
        onSubmit={submitForm}
      >
        <h3 className=" text-center text-dark">تفاصيل الشحن</h3>
        <Form.Group>
          <Form.Label className="mt-3">العنوان</Form.Label>
          <Form.Control
            autoCompete="off"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            name="address"
            required
            placeholder="اوصف عنوانك الحالي"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-3">المدينة</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setCity(e.target.value)}
            name="city"
            required
            placeholder="ادخل اسم مدينتك الحالية"
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className="mt-3">الدولة</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            name="country"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-3">رمزالبريد</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setPostalCode(e.target.value)}
            name="postalCode"
          ></Form.Control>
        </Form.Group>
        <button type="submit">التالي</button>
      </Form>
    </div>
  )
}

export default ShippingScreen
