import "./styles/shipping.css";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CheckOutLine from "../components/CheckOutLine";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  saveShippingAdress,
  ShippingAdressRemoveAction,
  ShippingAdressSaveAction,
} from "../store/actions/cartAction";
import Container from "../components/Container";
function ShippingScreen() {
  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const dispatch = useDispatch();
  const location = useLocation();
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [country, setCountry] = useState(shippingAddress.country);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const userInfo = useSelector((state) => state.userInfo);
  const { user } = userInfo;
  const navigate = useNavigate();
  useEffect(() => {
    !user && navigate("/login");
  }, [user]);
  const AddShippingAddress = (e) => {
    e.preventDefault();
    const body = { address, city, phone, country, postalCode };
    dispatch(ShippingAdressSaveAction(body));
    window.location.replace("/payment-method");
  };

  return (
    <div className="wrapper">
      <CheckOutLine step1 step2 />
      <Form
        onSubmit={AddShippingAddress}
        className="col-md-7 col-sm-11 m-auto p-3 mb-5"
      >
        <h3 className=" text-center text-dark">تفاصيل الشحن</h3>
        <Form.Group>
          <Form.Label className="mt-3">العنوان</Form.Label>
          <Form.Control
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
        <div className="align-items mt-4">
          <span
            className="cu-btn-danger"
            onClick={() => {
              dispatch(ShippingAdressRemoveAction());
              window.location.reload();
            }}
          >
            مسح العنون
          </span>
          {shippingAddress.country ? (
            <Link to="/payment-method" className="cu-btn-cyan px-3">
              التالي
            </Link>
          ) : (
            <input
              type="submit"
              to="/payment-method"
              className="cu-btn-cyan"
              value="اضافة العنوان"
            />
          )}
        </div>
      </Form>
    </div>
  );
}

export default ShippingScreen;
