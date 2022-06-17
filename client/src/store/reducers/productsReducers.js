import {
  PRODUCT_LIST_REQUEST_FAILURE,
  PRODUCT_LIST_REQUEST_START,
  PRODUCT_LIST_REQUEST_SUCCESS,
  SINGLE_PRODUCT_REQUEST_FAILURE,
  SINGLE_PRODUCT_REQUEST_START,
  SINGLE_PRODUCT_REQUEST_SUCCESS,
} from "../constants/productConstants"
export const ListProductsReducer = (state = { products: [] }, action) => {
  const { type, payload } = action
  switch (type) {
    case SINGLE_PRODUCT_REQUEST_START:
      return { loading: true, products: [], errors: false }
    case PRODUCT_LIST_REQUEST_SUCCESS:
      return { loading: false, products: payload, errors: false }
    case SINGLE_PRODUCT_REQUEST_FAILURE:
      return { loading: false, products: [], errors: true }
    default:
      return state
  }
}

export const singleProductsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  const { type, payload } = action
  switch (type) {
    case PRODUCT_LIST_REQUEST_START:
      return { ...state, loading: true, errors: false }
    case SINGLE_PRODUCT_REQUEST_SUCCESS:
      return { loading: false, product: payload, errors: false }
    case PRODUCT_LIST_REQUEST_FAILURE:
      return { ...state, loading: false, errors: true }
    default:
      return state
  }
}
