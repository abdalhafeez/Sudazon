import { ADD_TO_CART } from "../constants/cartContants"

export default (state = { cartItems: [] }, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TO_CART:
      const currentItem = payload
      const InCart = state.cartItems.find((item) => {
        return item.productId === currentItem.id
      })
      if (InCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.productId === currentItem.id ? currentItem : item
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, currentItem],
        }
      }
    default:
      return state
  }
}
