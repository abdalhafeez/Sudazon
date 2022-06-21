import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import reducer from "./reducer"
const middleware = [thunk]
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAdress")
  ? JSON.parse(localStorage.getItem("shippingAdress"))
  : {}
const paymentMethodFromLocalStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : ""
const tokenFromLocalStorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : ""
const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
    paymentMethod: paymentMethodFromLocalStorage,
    userInfo: {
      token: tokenFromLocalStorage,
    },
  },
}
// const reducer = combineReducers({
//   productsList: ListProductsReducer,
//   cart: cartReducer,
//   singleProduct: singleProductsReducer,
// })
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store
