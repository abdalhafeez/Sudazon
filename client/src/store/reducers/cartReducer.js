import {
  ADD_TO_CART,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartContants"

export default (
  state = { cartItems: [], shippingAddress: {}, paymentMethod: "" },
  action
) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TO_CART:
      const currentItem = payload
      const inCart = state.cartItems?.find(
        (item) => item.productId === currentItem.productId
      );
      if (inCart)
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.productId === currentItem.productId ? currentItem : item
          ),
        };
      else
        return {
          ...state,
          cartItems: [...state.cartItems, currentItem],
        };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAdress: payload,
      }
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: payload,
      }
    default:
      return state
  }
}
