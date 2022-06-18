import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import reducer from "./reducer"
import cartReducer from "./reducers/cartReducer"
import {
  ListProductsReducer,
  singleProductsReducer,
} from "./reducers/productsReducers"
const middleware = [thunk]
const itemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []
const initialState = {
  cart: {
    cartItems: itemsFromLocalStorage,
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
