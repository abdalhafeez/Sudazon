import "./styles/payment.css"
import { Form } from "react-bootstrap"
import CheckOutLine from "../components/CheckOutLine"
import { useState } from "react"
import { savePaymentMethod } from "../store/actions/cartAction"
import { useDispatch } from "react-redux"
function PaymentMethodScreen() {
  const dispatch = useDispatch()
  const [paymentMethod, setPaymentMethod] = useState("")
  const selectPaymentHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    paymentMethod && window.location.replace("/order-summary")
  }
  return (
    <div className="payment row m-auto col-10 pt-5">
      <CheckOutLine step1 step2 step3 />
      <Form onSubmit={selectPaymentHandler} className="payment-method">
        <h2 className="mb-5"> طريقة الدفع</h2>
        <Form.Group>
          <Form.Label as="legen">اختر طريقة الدفع </Form.Label>
        </Form.Group>
        <Form.Check
          type="checkbox"
          className="m-3"
          value="PayPal"
          label="بطاقة بيبال او بطاقة ائتمان"
          name="PayPal"
          id="PayPal"
          onChange={(e) => setPaymentMethod(e.target.value)}
        ></Form.Check>
        <Form.Check
          type="checkbox"
          className="m-3"
          value="Scripe"
          label="ادبفع عبر حساب استرايب"
          name="Scripe"
          id="Scripe"
          onChange={(e) => setPaymentMethod(e.target.value)}
        ></Form.Check>
        {paymentMethod && (
          <button className="btn btn-sm btn-info m-3">مواصلة</button>
        )}
      </Form>
    </div>
  )
}

export default PaymentMethodScreen
