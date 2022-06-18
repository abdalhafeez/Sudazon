import { combineReducers } from "redux"
import cartReducer from "./reducers/cartReducer"
import {
  ListProductsReducer,
  singleProductsReducer,
} from "./reducers/productsReducers"
const reducer = combineReducers({
  productsList: ListProductsReducer,
  cart: cartReducer,
  singleProduct: singleProductsReducer,
})

export default reducer
