import "./styles/topbar.css"
import JoinBtns from "./JoinBtns"
import { Link } from "react-router-dom"
import Search from "./Search"

import AdminMenu from "./AdminMenu"
function Topbar({ showMenu, setShowMenu }) {
  return (
    <div className="topbar row col-12">
      <div className="shopping-cart col-sm-7 col-md-2 text-center me-2">
        {" "}
        {/* <span>سلة المبيعات</span> */}
        <span className="count">3</span>
        <i className="bi bi-cart cart-icon" style={{ fontSize: 35 }}></i>
      </div>
      <div className="links col-6 d-none .d-sm-block d-ms-none d-md-block">
        <Search />
      </div>
      <div className=" col-md-4 col-sm-6 logo-parent">
        <JoinBtns />
        <AdminMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        <Link to="/" className="link">
          <h3 className=" text-center logo">سودازون</h3>
        </Link>
      </div>
    </div>
  )
}

export default Topbar
