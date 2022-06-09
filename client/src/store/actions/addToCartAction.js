import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartContants"

export const addToCartAction = (id, quantity) => async (dispatch, getState) => {
  const res = await axios.get("/products/" + id)
  try {
    dispatch({
      ADD_TO_CART,
      payload: {
        productId: res.data.id,
        name: res.data.name,
        price: res.data.price,
        image: res.data.mainImage,
        quantity,
      },
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    console.log(error)
  }
}
