import {
  PRODUCT_CREATE_REQUEST_FAILURE,
  PRODUCT_CREATE_REQUEST_START,
  PRODUCT_CREATE_REQUEST_SUCCESS,
  PRODUCT_LIST_REQUEST_FAILURE,
  PRODUCT_LIST_REQUEST_START,
  PRODUCT_LIST_REQUEST_SUCCESS,
  SINGLE_PRODUCT_REQUEST_FAILURE,
  SINGLE_PRODUCT_REQUEST_START,
  SINGLE_PRODUCT_REQUEST_SUCCESS,
} from "../constants/productConstants";
export const ListProductsReducer = (state = { products: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_LIST_REQUEST_START:
      return { loading: true, products: [], error: false };
    case PRODUCT_LIST_REQUEST_SUCCESS:
      return { loading: false, products: payload, error: false };
    case PRODUCT_LIST_REQUEST_FAILURE:
      return { loading: false, products: [], error: payload };
    default:
      return state;
  }
};

export const singleProductsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SINGLE_PRODUCT_REQUEST_START:
      return { ...state, loading: true, error: false };
    case SINGLE_PRODUCT_REQUEST_SUCCESS:
      return { loading: false, product: payload, error: false };
    case SINGLE_PRODUCT_REQUEST_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export const createProductReducer = (
  state = { item: [], loading: false, error: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_CREATE_REQUEST_START:
      return { loading: true, item: [], error: false };
    case PRODUCT_CREATE_REQUEST_SUCCESS:
      return { loading: false, item: payload, error: false };
    case PRODUCT_CREATE_REQUEST_FAILURE:
      return { loading: false, item: [], error: payload };
    default:
      return state;
  }
};