import {
  PRODUCT_LIST_REQUEST_FAILURET,
  PRODUCT_LIST_REQUEST_START,
  PRODUCT_LIST_REQUEST_SUCCESS,
} from "../constants/productConstants"
export const productsReducer = (state = { products: [] }, action) => {
  const { type, payload } = action
  switch (type) {
    case PRODUCT_LIST_REQUEST_START:
      return { loading: true, products: [], errors: false }
    case PRODUCT_LIST_REQUEST_SUCCESS:
      return { loading: false, products: payload, errors: false }
    case PRODUCT_LIST_REQUEST_FAILURET:
      return { loading: false, products: [], errors: true }
    default:
      return state
  }
}
