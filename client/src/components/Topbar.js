import "./styles/topbar.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import AdminMenu from "./AdminMenu";
import { useSelector, useDispatch } from "react-redux";
function Topbar({ showMenu, setShowMenu }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo.user);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <div className="topbar  col-12">
      <Link to={`/cart/${user?._id}`} className="link">
        <div className="shopping-cart text-center mx-3">
          {" "}
          {/* <span>سلة المبيعات</span> */}
          <span className="count">
            {cartItems.reduce((acc, current) => acc + current.quantity, 0)}
          </span>
          <i className="bi bi-cart cart-icon" style={{ fontSize: 35 }}></i>
        </div>{" "}
      </Link>
      <div className="ms-auto">
        {user ? (
          user?.isAdmin ? (
            <AdminMenu
              user={user}
              dispatch={dispatch}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          ) : (
            ""
          )
        ) : (
          <div className="join-btns ">
            {" "}
            <Link to="/login" className=" mx-1 ">
              تسجيل الدخول
            </Link>
          </div>
        )}
      </div>
      <div className="search-parent d-none d-ms-none d-md-block">
        <Search />
      </div>
      <h5>
        <Link to="/" className="link text-center logo">
          سودازون
        </Link>
      </h5>
    </div>
  );
}

export default Topbar;
