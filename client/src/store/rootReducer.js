import { combineReducers } from "redux"
import cartReducer from "./reducers/cartReducer"
import { productsReducer } from "./reducers/productsReducer"
const rootReducer = combineReducers({
  productsList: productsReducer,
  cart: cartReducer,
})

export default rootReducer
