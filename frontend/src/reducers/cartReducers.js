import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

const initialState = {
  cartItems: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case CART_ADD_ITEM:
      const item = payload
      //checks if item has already been added to cart\
      const existsItem = state.cartItems.find(x => x.product === item.product)
      if (existsItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => x.product === existsItem.product ? item : x)
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== payload)
      }

    default:
      return state
  }
}
