import { Link, useLocation } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import "./styles/checkOutLine.css"
function CheckOutLine({ step1, step2, step3, step4 }) {
  const [navColor, setNavColor] = useState(null)
  const history = useLocation()
  const idRed = useRef()
  const pathname = history.pathname.split("/").pop()
  useEffect(() => {
    setNavColor(idRed.current.id === pathname);
  }, [pathname]);
  return (
    <nav className="row col-11 m-auto my-3 check-out-line">
      {step1 ? (
        <Link
          className={`col-3 passed ${pathname === "login" && "navColor"}`}
          to="/login"
          id="login"
          ref={idRed}
        >
          {" "}
          تسجيل الدخول
        </Link>
      ) : (
        <Link className="col-3 text-muted not-passed" disabled to="/login">
          تسجيل الدخول
        </Link>
      )}
      {step2 ? (
        <Link
          className={`col-3 passed ${pathname === "shipping" && "navColor"}`}
          to="/shipping"
          ref={idRed}
          id="shipping"
        >
          {" "}
          الشحن
        </Link>
      ) : (
        <Link className="col-3 text-muted not-passed" disabled to="/shipping">
          الشحن
        </Link>
      )}
      {step3 ? (
        <Link
          className={`col-3 passed ${
            pathname === "payment-method" && "navColor"
          }`}
          ref={idRed}
          to="/payment-method"
          id="payment-method"
        >
          الدفع
        </Link>
      ) : (
        <Link
          className="col-3 text-muted not-passed"
          disabled
          to="/payment-method"
        >
          الدفع
        </Link>
      )}
      {step4 ? (
        <Link
          className={`col-3 passed ${
            pathname === "order-summary" && "navColor"
          }`}
          ref={idRed}
          to="/order-summary"
          id="order-summary"
        >
          {" "}
          ملخص الطلب
        </Link>
      ) : (
        <Link
          className="col-3 text-muted not-passed"
          disabled
          to="/order-summary"
        >
          ملخص الطلب
        </Link>
      )}
    </nav>
  )
}

export default CheckOutLine
