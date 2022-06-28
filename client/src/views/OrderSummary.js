import "./styles/orderSummary.css";
import CheckOutLine from "../components/CheckOutLine";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { prods } from "../prods";
function OrderSummary() {
  // const userInfo = useSelector((state) => state.userInfo);
  // const { user } = userInfo;
  // const navigate = useNavigate();
  // !user && navigate("/login");
  const cart = useSelector((state) => state.cart);
  const itemsTotalPrice = Number(
    cart.cartItems.reduce((acc, current) => acc + Number(current.price), 0)
  );

  const itemsTotalQty = Number(
    cart.cartItems.reduce((acc, current) => acc + Number(current.quantity), 0)
  );
  cart.itemsPrice = itemsTotalPrice * itemsTotalQty;
  cart.shippingPrice = (Number(cart.itemsPrice) / 100) * 15;
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
  return (
    <Container className="pt-5 row m-auto order-summary h100">
      <CheckOutLine step1 step2 step3 step4 />
      <div className="col-12 row ">
        <h2 className="text-center tx-coral m-3"> تفاصيل الطلب</h2>
        <div className="col-md-7 m-auto right col-sm-12 shadow-sm p-3">
          <div className="col-12">
            <h5 className="tx-lt-dark m-2">موقع الطلبية</h5>
            <p className="p2">
              {cart?.shippingAddress?.address +
                " - " +
                cart?.shippingAddress?.city +
                " - " +
                cart?.shippingAddress?.country +
                " - بريد: " +
                cart?.shippingAddress?.postalCode}
              <br />
              <span className="tx-coral">تلفون :</span>{" "}
              <a
                href={`tel:${cart?.shippingAddress?.phone}`}
                className="text-muted link"
              >
                {cart?.shippingAddress?.phone}
              </a>
            </p>
          </div>
          <div className="col-12">
            <h5 className="tx-lt-dark m-2">طريقة الدفع</h5>
            <p className="p2">{cart?.paymentMethod}</p>
          </div>
          <div className="col-12 ">
            <h5 className="tx-lt-dark m-2">المشتريات</h5>
            <>
              {" "}
              {cart?.cartItems?.map((item, index) => (
                <div className="product align-items" key={index}>
                  <img
                    src={prods[0].image}
                    alt="product"
                    className="icon-img-rounded"
                  />
                  <Link to={`/product-details/${item._id}`} className>
                    <h6 className="product-name text-dark">{item.name}</h6>
                  </Link>
                  <div className="price text-muted">
                    <span className="mx-2"> {`العددية: ${item.quantity}`}</span>
                    <span className="mx-2"> {`السعر: ${item.price}`}</span>
                    <span className="mx-2">
                      {" "}
                      {`الاجمالي: ${item.price * item.quantity} جنيه`}
                    </span>
                  </div>
                </div>
              ))}
            </>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 shadow-sm summary">
          <h5 className="tx-title">ملخص الطلب</h5>
          <ul>
            <li>سعر المشتريات</li>
            <li>{cart?.itemsPrice} جنيه</li>
          </ul>
          <ul>
            <li>سعر التوصيلة</li>
            <li> {cart?.shippingPrice} جنيه</li>
          </ul>
          <ul>
            <li>اجمالي الطلبية</li>
            <li>{cart?.totalPrice} جنيه</li>
          </ul>

          <button className="cu-btn-coral me-auto">دفع الفاتورة</button>
        </div>
      </div>
    </Container>
  );
}

export default OrderSummary;
