import { axiosInstance } from "../../axiosInstance"
import { ADD_TO_CART } from "../constants/cartContants"

export const addToCartAction = (id, quantity) => async (dispatch, getState) => {
  const res = await axiosInstance.get(`/products/${id}`)
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        productId: res.data._id,
        name: res.data.name,
        price: res.data.price,
        image: res.data?.image > 0 && res.data?.image[0],
        quantity,
      },
    })
    console.log(getState())
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    console.log(error)
  }
}
