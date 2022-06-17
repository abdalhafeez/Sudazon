import { axiosInstance } from "../../axiosInstance"
import {
  PRODUCT_LIST_REQUEST_FAILURE,
  PRODUCT_LIST_REQUEST_START,
  PRODUCT_LIST_REQUEST_SUCCESS,
  SINGLE_PRODUCT_REQUEST_FAILURE,
  SINGLE_PRODUCT_REQUEST_START,
  SINGLE_PRODUCT_REQUEST_SUCCESS,
} from "../constants/productConstants"
export const fetchProducts = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST_START })
    const res = await axiosInstance.get(`/products`)
    res.data &&
      dispatch({ type: PRODUCT_LIST_REQUEST_SUCCESS, payload: res.data })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_REQUEST_FAILURE,
      payload:
        error.response && error.response.data.errers
          ? error.response.data.errors
          : error.message,
    })
  }
}

export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_PRODUCT_REQUEST_START })
    const res = await axiosInstance.get(`/products/${id}`)
    res.data &&
      dispatch({ type: SINGLE_PRODUCT_REQUEST_SUCCESS, payload: res.data })
  } catch (error) {
    dispatch({
      type: SINGLE_PRODUCT_REQUEST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
