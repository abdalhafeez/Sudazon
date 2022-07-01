import "./styles/dashboardScreen.css";
import CreateProduct from "./CreateProduct";
import { useState } from "react";
import AdminProducts from "../components/AdminProducts";
import AdminUsers from "../components/AdminUsers";

function DashboardScreen() {
  const [cream, setCream] = useState(false);
  const [shoes, setShoes] = useState(false);
  const [users, setUsers] = useState(false);
  const [prods, setProd] = useState(false);
  const [form, setForm] = useState(true);
  const showProducts = () => {
    setShoes(false);
    setCream(false);
    setProd(true);
    setForm(false);
    setUsers(false);
  };
  const showForm = () => {
    setForm(true);
    setUsers(false);
    setProd(false);
  };
  const showUsers = () => {
    setUsers(true);
    setForm(false);
    setProd(false);
    setShoes(false);
    setCream(false);
  };
  return (
    <div className="row col-12 m-auto d-sm-position-relative dashoboard">
      <div className="col-2 d-none d-sm-none d-md-block"></div>
      <div className="menu col-md-2 col-sm-12">
        <h5 className="tx-coral text-center title">ادارة المنتجات</h5>
        <ul>
          <li
            onClick={showProducts}
            className={`mx-2 option ${prods && "cu-btn-coral"}`}
          >
            المنتجات<i class="bi m-1 bi-bag-heart-fill"></i>
          </li>
          <li
            onClick={showUsers}
            className={`mx-2 option ${users && "cu-btn-coral"}`}
          >
            {" "}
            العملاء
            <i class="bi m-1 bi-people"></i>
          </li>
          <li
            onClick={showForm}
            className={`mx-2 option ${form && "cu-btn-coral"}`}
          >
            اضافة<i class="bi m-1 bi-plus-circle-fill"></i>
          </li>
          <nav className={`${form ? "show-nav" : ""}`}>
            <li
              onClick={() => {
                setShoes(true);
                setCream(false);
              }}
              className={`mx-2 option ${shoes && "cu-btn-coral"}`}
            >
              حذاء{" "}
            </li>
            <li
              onClick={() => {
                setCream(true);
                setShoes(false);
              }}
              className={`mx-2 option ${cream && "cu-btn-coral"}`}
            >
              كريم
            </li>
          </nav>
        </ul>
      </div>
      <div className="row col-md-9 m-auto col-sm-12 pt-5">
        {form && <CreateProduct shoes={shoes} cream={cream} />}
        {prods && <AdminProducts />}
        {users && <AdminUsers />}
      </div>
    </div>
  );
}

export default DashboardScreen;
