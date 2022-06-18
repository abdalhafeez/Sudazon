import { ADD_TO_CART } from "../constants/cartContants"

export default (state = { cartItems: [] }, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TO_CART:
      const currentItem = payload
      const inCart = state.cartItems?.find(
        (item) => item.productId === currentItem.productId
      )
      console.log(inCart)
      if (inCart)
        return {
          ...state,
          error: "this Item is already is cart",
        }
      else
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
        }

    default:
      return state
  }
}
