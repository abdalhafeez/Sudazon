import { axiosInstance } from "../../utils/axiosInstance"
import {
  ADD_TO_CART,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartContants"

export const addToCartAction = (id, quantity) => async (dispatch, getState) => {
  const res = await axiosInstance.get(`/products/${id}`)
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        name: res.data.name,
        productId: res.data._id,
        price: res.data.price,
        quantity,
        image: res.data?.image > 0 && res.data?.image[0],
      },
    });
    console.log(getState())
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    console.log(error)
  }
}

export const savePaymentMethod = (data) => async (dispatch, getState) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })
  localStorage.setItem("paymentMethod", JSON.stringify(data))
}

export const saveShippingAdress = (data) => async (dispatch, getState) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })
  console.log(getState().cart)
  localStorage.setItem("shippingAdress", JSON.stringify(data))
}
