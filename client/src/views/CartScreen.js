import "./styles/cartScreen.css"
import { prods } from "../prods"
import { Link } from "react-router-dom"

import React from "react"
function CartScreen() {
  return (
    <div className="row m-0 cart-screen ">
      <div className="col-md-11 pt-5  m-auto mt-5 row">
        <div className="title-parent">
          <h2 className="mb-3 text-center title"> سلة مشترياتك</h2>
        </div>
        {true ? (
          <div className="no-products-msg shadow-sm">
            <h3 className="text-center mt-5"> لم تقوم باضافة اي منتجات </h3>
            <Link to="/" className=" btn btn-lg btn-info mt-5">
              قائمة المنتجات
            </Link>
          </div>
        ) : (
          <>
            <div className=" col-md-7 product-in-cart m-auto shadow-sm">
              {prods?.slice(1, 3).map((item) => (
                <div className="product align-items">
                  <img src="" alt="product" className="product-img" />
                  <h3 className="product-namge">{item.tile}</h3>
                  <div className="price text-primary">{`جنيه ${item.price}`}</div>
                  <div className="amount">
                    <i
                      className="bi bi-file-plus amount-control-icons"
                      style={{ fontSize: 30 }}
                    ></i>
                    <span className="m-2">(3)</span>
                    <i
                      className="bi bi-file-minus amount-control-icons"
                      style={{ fontSize: 30 }}
                    ></i>
                  </div>
                  <button className="delete btn btn-danger btn-sm">
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-info col-md-4 m-auto ">
              <h5> لديك 3 منتج</h5>
              <h5> اجمالي السعر</h5>
              <button className="check-out-btn btn btn-sm btn-success">
                دفع الفاتورة
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartScreen
