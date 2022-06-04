import JoinBtns from "./JoinBtns"
import Search from "./Search"
import "./styles/topbar.css"
function Topbar() {
  return (
    <div className="topbar row col-12">
      <div className="shopping-cart col-sm-7 col-md-2 text-center me-2">
        {" "}
        {/* <span>سلة المبيعات</span> */}
        <span className="count">3</span>
        <i class="bi bi-cart cart-icon" style={{ fontSize: 35 }}></i>
      </div>
      <div className="links col-6 d-none .d-sm-block d-ms-none d-md-block">
        <Search />
      </div>
      <div className=" col-md-4 col-sm-6 logo-parent">
        <JoinBtns />
        <h3 className=" text-center logo">سودا زون</h3>
      </div>
    </div>
  )
}

export default Topbar
