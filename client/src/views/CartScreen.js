import "./styles/cartScreen.css"
import { prods } from "../prods"
 import { useEffect, useState } from "react"
 import { Link, useLocation } from "react-router-dom"
 import { useDispatch, useSelector } from "react-redux"
 import { fetchSingleProduct } from "../store/actions/productsActions"
 import { addToCartAction } from "../store/actions/cartAction"

 function CartScreen() {
   const history = useLocation();
   const id = history.pathname.split("/")[2];
   const qty = Number(history.search.split("=")[1]);
   console.log(qty);
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(addToCartAction(id, qty));
   }, [dispatch]);
   const cart = useSelector((state) => state.cart);
   const { cartItems } = cart;
   return (
     <div className="row m-0 cart-screen ">
       <div className="col-md-10 col-sm-12 pt-5  m-auto mt-5 row">
         <div className="title-parent">
           <h2 className="mb-5 text-center title"> سلة مشترياتك</h2>
         </div>
         {cartItems?.length === 0 ? (
           <div className="no-products-msg shadow-sm">
             <h3 className="text-center mt-5"> لم تقوم باضافة اي منتجات </h3>
             <Link to="/" className=" btn btn-lg btn-info mt-5">
               قائمة المنتجات
             </Link>
           </div>
         ) : (
           <>
             <div className="cart-info col-md-3 m-auto p-3">
               <div className="price-info">
                 <ul>
                   <li>عدد مشترياتك : </li>
                   <li>
                     (
                     {cartItems.reduce((acc, current) => {
                       return Number(current.quantity) + acc;
                     }, 0)}
                     )
                   </li>
                 </ul>
                 <ul>
                   <li> اجمالي السعر : </li>
                   <li>
                     {cartItems.reduce(
                       (acc, current) => acc + Number(current.quantity),
                       0
                     ) *
                       cartItems.reduce(
                         (acc, current) => acc + Number(current.price),
                         0
                       )}
                   </li>
                 </ul>
                 <button className="check-out-btn btn btn-sm  mt-5 mb-2">
                   دفع الفاتورة
                 </button>
               </div>
             </div>
             <div className=" col-md-9 product-in-cart m-auto shadow-sm">
               {cartItems?.map((item) => (
                 <div className="product align-items" key={item._id}>
                   <img
                     src={prods[0].image}
                     alt="product"
                     className="product-img"
                   />
                   <Link to={`/product-details/${item._id}`} className>
                     <h6 className="product-name text-dark">{item.name}</h6>
                   </Link>
                   <div className="price text-primary">{`جنيه ${item.price}`}</div>
                   <div className="amount">
                     <i
                       onClick={() => dispatch(addToCartAction(id, qty + 1))}
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
   );
 }

export default CartScreen
