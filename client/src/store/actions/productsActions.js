import axios from "axios"
import { axiosInstance } from "../../axiosInstance"
import {
  PRODUCT_LIST_REQUEST_FAILURET,
  PRODUCT_LIST_REQUEST_START,
  PRODUCT_LIST_REQUEST_SUCCESS,
} from "../constants/productConstants"
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST_START })
    const res = await axiosInstance.get("/products")
    res.data &&
      dispatch({ type: PRODUCT_LIST_REQUEST_SUCCESS, payload: res.data })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_REQUEST_FAILURET,
      payload:
        error.response && error.response.data.errers
          ? error.response.data.errors
          : error.message,
    })
  }
}
