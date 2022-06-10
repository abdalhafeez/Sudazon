import "./styles/adminMenu.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Dropdown } from "react-bootstrap"
function AdminMenu({ showMenu, setShowMenu }) {
  return (
    <div className="admin-menu">
      <Dropdown.Toggle
        variant="dark"
        id="dropdown-basic"
        onClick={(e) => {
          setShowMenu(true)
          e.stopPropagation()
        }}
      >
        الإدارة
      </Dropdown.Toggle>

      <div className={`list shadow ${showMenu && "show-admin-menu"}`}>
        <li className="user">
          <h5 className="user-name">عبدالحفيظ اسماعيل</h5>
          <span className="role">مشرف</span>{" "}
        </li>
        <li>
          <Link to="admin/create" onClick={() => setShowMenu(false)}>
            اضافة منتج جديد
          </Link>
        </li>
        <li>
          <Link to="/">عرض كل المنتجات</Link>
        </li>
      </div>
    </div>
  )
}

export default AdminMenu
