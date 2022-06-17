import { combineReducers } from "redux"
import cartReducer from "./reducers/cartReducer"
import {
  ListProductsReducer,
  singleProductsReducer,
} from "./reducers/productsReducers"
const rootReducer = combineReducers({
  productsList: ListProductsReducer,
  cart: cartReducer,
  singleProduct: singleProductsReducer,
})

export default rootReducer
