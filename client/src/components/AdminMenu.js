import "./styles/adminMenu.css"
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { userLogout } from "../store/actions/userActions";
function AdminMenu({ user, showMenu, setShowMenu, dispatch }) {
  return (
    <div className="admin-menu">
      <Dropdown.Toggle
        className="cu-btn-cyan"
        onClick={(e) => {
          setShowMenu(!showMenu);
          e.stopPropagation();
        }}
      >
        {user?.name.split(" ")[0]}{" "}
      </Dropdown.Toggle>
      <div className={`list shadow ${showMenu && "show-admin-menu"}`}>
        <li className="user">
          <h5 className="role text-center tx-coral"> مشرف</h5>
        </li>
        <li>
          <Link to="admin" onClick={() => setShowMenu(false)}>
            الادارة{" "}
          </Link>
        </li>
        <li>
          <Link to="/">عرض كل المنتجات</Link>
        </li>
        <div className="align-items mt-3">
          <button
            className="cu-btn-danger"
            onClick={() => dispatch(userLogout())}
          >
            خروج
          </button>
          <button className="cu-btn-cyan">حذف حسابك</button>
        </div>
      </div>
    </div>
  );
}

export default AdminMenu
