import { combineReducers } from "redux"
import cartReducer from "./reducers/cartReducer"
import { ListProductsReducer } from "./reducers/productsReducers"
const rootReducer = combineReducers({
  productsList: ListProductsReducer,
  cart: cartReducer,
})

export default rootReducer
