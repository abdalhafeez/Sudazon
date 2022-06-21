import { combineReducers } from "redux"
import cartReducer from "./reducers/cartReducer"
import {
  ListProductsReducer,
  singleProductsReducer,
} from "./reducers/productsReducers"
import { userInfoReducer } from "./reducers/userReducers"
const reducer = combineReducers({
  productsList: ListProductsReducer,
  cart: cartReducer,
  singleProduct: singleProductsReducer,
  userInfo: userInfoReducer,
})

export default reducer
