import "./styles/cartScreen.css"
import { prods } from "../prods"
 import { useEffect, useState } from "react"
 import { Link, useLocation } from "react-router-dom"
 import { useDispatch, useSelector } from "react-redux"
 import { fetchSingleProduct } from "../store/actions/productsActions"
 import { addToCartAction } from "../store/actions/cartAction"

 function CartScreen() {
   const history = useLocation()
   const id = history.pathname.split("/")[2]
   const dispatch = useDispatch()
   useEffect(() => {
     dispatch(addToCartAction(id, 5))
   }, [dispatch])
   const cart = useSelector((state) => state.cart)
   const { cartItems } = cart
   console.log(cart)
   return (
     <div className="row m-0 cart-screen ">
       <div className="col-md-11 pt-5  m-auto mt-5 row">
         <div className="title-parent">
           <h2 className="mb-3 text-center title"> سلة مشترياتك</h2>
         </div>
         {false ? (
           <div className="no-products-msg shadow-sm">
             <h3 className="text-center mt-5"> لم تقوم باضافة اي منتجات </h3>
             <Link to="/" className=" btn btn-lg btn-info mt-5">
               قائمة المنتجات
             </Link>
           </div>
         ) : (
           <>
             <div className="cart-info col-md-3 m-auto p-3">
               <h6>
                 {" "}
                 لديك{" "}
                 <span className="text-white rounded bg-dark">
                   (
                   {cartItems.reduce((acc, current) => {
                     return Number(current.quantity) + acc
                   }, 0)}
                   )
                 </span>{" "}
                 منتج في سلة مشترياتك
               </h6>
               <h6 className="m-3 text-dark">
                 {" "}
                 {/* (
                 {cartItems.reduce((acc, current) => {
                   return Number(current.quantity) + acc
                 }, 0) * Number(current.price)} */}
                 )= اجمالي السعر
               </h6>
               <button className="check-out-btn btn btn-sm btn-success">
                 دفع الفاتورة
               </button>
             </div>
             <div className=" col-md-9 product-in-cart m-auto shadow-sm">
               {cartItems?.map((item) => (
                 <div className="product align-items" key={item._id}>
                   <img
                     src={prods[0].image}
                     alt="product"
                     className="product-img"
                   />
                   <h6 className="product-name text-dark">{item.name}</h6>
                   <div className="price text-primary">{`جنيه ${item.price}`}</div>
                   <div className="amount">
                     <i
                       className="bi bi-file-plus amount-control-icons"
                       style={{ fontSize: 30 }}
                     ></i>
                     <span className="m-2">({item.quantity})</span>
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
           </>
         )}
       </div>
     </div>
   )
 }

export default CartScreen
