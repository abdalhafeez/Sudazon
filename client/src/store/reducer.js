import { combineReducers } from "redux"
import cartReducer from "./reducers/cartReducer"
import {
  createProductReducer,
  ListProductsReducer,
  singleProductsReducer,
} from "./reducers/productsReducers";
import { userInfoReducer } from "./reducers/userReducers";
const reducer = combineReducers({
  productsList: ListProductsReducer,
  cart: cartReducer,
  singleProduct: singleProductsReducer,
  userInfo: userInfoReducer,
  addedProduct: createProductReducer,
});

export default reducer
